import AsyncHandler from "express-async-handler";
import prisma from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @controller signup user controller
 * @method : POST
 * @description : sign-up user with password and email
 * @route : /auth/signup
 * @access : public
 */
export const registerUser = AsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please provide username, email, and password.");
  }

  // Check if the user already exists
  const userExists = await prisma.user.findFirst({
    where: {
      OR: [
        { email: email },
        { username: username },
      ],
    },
  });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists.");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });

  res.status(201).json({
    success: true,
    message: "User registered successfully.",
    data: { id: user.id, username: user.username, email: user.email }, // Exclude sensitive data
  });
});


/**
 * @controller login user controller
 * @method : POST
 * @description : Login user with password and email
 * @route : /auth/Login
 * @access : public
 */

export const loginUserController = AsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error("Please provide a username and password.");
  }

  // Check if user exists
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user) {
    res.status(401); // Unauthorized
    throw new Error("Invalid credentials.");
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid credentials.");
  }

  // Token expiration
  const expiresIn = 60 * 60 * 24 * 30; // 30 days

  // Generate JWT token
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn });

  // Set cookie with token
  res.cookie("token", token, {
    httpOnly: true, // Prevent client-side JavaScript access
    secure: process.env.NODE_ENV === "production", // Use HTTPS in production
    maxAge: expiresIn * 1000, // Convert to milliseconds
    sameSite: "Strict", // Protect against CSRF
  });

  res.status(200).json({
    success: true,
    message: "Login successful.",
    data: { id: user.id, username: user.username, email: user.email }, // Exclude sensitive data
    token,
    expiresIn,
  });
});


// Get all users
/**
 * @controller get all users
 * @method : GET
 * @description : Get all users
 * @route : /all
 * @access : private
 */
export const getAllUsers = AsyncHandler(async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json({
    success: true,
    data: users,
    message: "All users fetched successfully",
  });
});
