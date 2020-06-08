import { getReference, get, set } from "../firebase/firebase.utils";

export const createUser = async (userAuth, aditionalData) => {
  const userRef = getReference(`users/${userAuth.uid}`);
  const userSnap = await get(userRef);
  if (!userSnap.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    await set(userRef, {
      displayName,
      email,
      createAt,
      ...aditionalData,
    });
  }
  return userRef;
};
