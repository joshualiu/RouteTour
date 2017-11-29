import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import AvatarExampleSimple from '../bundles/CountryMap/components/AvatarExampleSimple';
import UserList from '../bundles/CountryMap/components/UserList';
import LandMarks from '../bundles/LandMarks/components/LandMarks';
import Main from '../bundles/Main/components/Main';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,LandMarks,Main, UserList, AvatarExampleSimple
});
