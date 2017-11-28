import ReactOnRails from 'react-on-rails';

import Chat from '../bundles/Chat/components/Chat';
import ChatBar from '../bundles/Chat/components/ChatBar';
import ChatMessage from '../bundles/Chat/components/ChatMessage';
import ChatMessages from '../bundles/Chat/components/ChatMessages';
import LandMarks from '../bundles/LandMarks/components/LandMarks';

// This is how react_on_rails can see the ChatMessage/ChatMessages in the browser.
ReactOnRails.register({
  Chat, ChatBar, ChatMessage, ChatMessages, LandMarks
});