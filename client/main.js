import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

AutoForm.setDefaultTemplate('materialize');


Template.pickadate.helpers({
  showCollection: function(){

    return Books.find().fetch()

  }
});
