
Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  pickadate: {
    type: Date,
    autoform: {
      type:"pickadate",


    }
  },
  pickadateTimezone: {
    type: Date,
    optional: true,
    autoform: {
      type:"pickadate",
      timezoneId: "America/Los_Angeles"
    }
  },

  autoFormDate: {
    type: Date,
    optional: true,
    autoform: {
      type:"date",
    }
  }
})
);
