import { db } from './firebaseConfig';

const sendMessage = async (sender, receiver, message) => {
  try {
    await db.collection('messages').add({
      sender,
      receiver,
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    console.log('Message sent!');
  } catch (error) {
    console.error('Error sending message: ', error);
  }
};

export default sendMessage;
