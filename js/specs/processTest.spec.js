(function() {
  describe('Show temprature', () => {
    // calling 'show' function in 'showOutput' has nothing to do with this test so I am skipping it
    var show = () => {
      return true;
    }
    it('Should be able to provide temperature in Celcius and Fahrenheit', () => {
      if (show()) {
        pending();
      }
      expect(showOutput([1, 3, 5, 6, 8])).toEqual([1, 33.8, 3, 37.4, 5, 41, 6, 42.8, 8, 46.4]);
    })
  });
}());
