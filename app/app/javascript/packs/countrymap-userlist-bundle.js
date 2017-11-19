import ReactOnRails from 'react-on-rails';

import UserList from '../bundles/CountryMap/components/UserList';
import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

// This is how react_on_rails can see the UserList in the browser.
ReactOnRails.register({
  UserList,HelloWorld
});