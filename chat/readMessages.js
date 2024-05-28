import { db } from './firebaseConfig';

const getMessages = (callback) => {
  db.collection('messages')
    .orderBy('timestamp')
    .onSnapshot((snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(messages);
    });
};

export default getMessages;
