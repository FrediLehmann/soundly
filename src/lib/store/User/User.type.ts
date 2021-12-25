/**
 * User information
 */
export type UserInfo = {
  /**
   * Email address, used to sign in
   */
  email: string;
  /**
   * Username the username the user has choosen
   */
  username: string;
};

/**
 * User type including some functions to manage states / infos
 */
export type User = {
  /**
   * Authentication token
   */
  readonly token: string;
  /**
   * User information
   */
  readonly data: UserInfo;
  /**
   * Sign in new user, using email and password
   * @param {string} email Email address that is used to sign in the user
   * @param {string} pwd Password with which the user is logged in
   * @returns {Promise<void>} Resolves or rejects depending on sign in success
   */
  singIn: (email: string, pwd: string) => Promise<void>;
  /**
   * Sign out sign the currently logged in user out
   * @returns {Promise<void>} Resolves or rejects depending on sign out success
   */
  singOut: () => Promise<void>;
  /**
   * Fetches user information from the supabase BE
   * @returns {Promise<UserInfo>} Resolves or rejects depending the operations success
   */
  getInfo: () => Promise<UserInfo>;
  /**
   * Changes user information
   * @param {UserInfo} newInfo New information to push to the BE
   * @returns {Promise<UserInfo>} Resolves or rejects depending the operations success
   */
  changeInfo: (newInfo: UserInfo) => Promise<UserInfo>;
  /**
   * Returns true if the user is logged in or false if he's not logged in
   */
  isLoggedIn: () => boolean;
};
