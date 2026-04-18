import bcryptjs from 'bcryptjs';
import { prisma } from '../lib/prisma.js';

/**
 * A dummy bcrypt hash used to perform a constant-time comparison when no
 * user is found, preventing timing-based username enumeration attacks.
 */
const DUMMY_HASH = '$2b$10$invalidhashvalueforconstanttimecomparisons000000000000';

/**
 * Authentication Service
 */
export class AuthService {
  /**
   * Validate user credentials against the database.
   * Always performs a bcrypt comparison (even on miss) to prevent timing side-channels.
   * @param username
   * @param password
   * @returns AdminUser if credentials are valid, otherwise null
   */
  async validateCredentials(username: string, password: string) {
    const user = await prisma.adminUser.findUnique({
      where: { username },
    });

    // Always run bcrypt.compare to ensure constant-time response regardless of
    // whether the user exists. This prevents username enumeration via timing.
    const hashToCompare = user?.password ?? DUMMY_HASH;
    const isPasswordMatch = await bcryptjs.compare(password, hashToCompare);

    if (!user || !isPasswordMatch) {
      return null;
    }

    return user;
  }
}

export const authService = new AuthService();
