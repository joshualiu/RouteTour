import ReactOnRails from 'react-on-rails';

import UserList from '../bundles/CountryMap/components/UserList';
import AvatarExampleSimple from '../bundles/CountryMap/components/AvatarExampleSimple';
import Main from '../bundles/Main/components/Main';

//import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';

// This is how react_on_rails can see the UserList in the browser.
ReactOnRails.register({
  UserList,AvatarExampleSimple,Main//HelloWorld,
});