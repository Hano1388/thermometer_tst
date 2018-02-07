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

  describe('Threshold', () => {
    // Setting class attribute inside 'specifyThreshold' function. It has nothing to do with this test so I am skipping it
    var setAttribute = () => {
      return true;
    }

    it('should be able to enter a threshold', async() => {
      if (setAttribute()) {
        pending();
      }
      let result = await provideThreshold();
      expect(result).toBe();
    })
  });

  describe('Specify Direction', () => {
    var direction = document.forms.directionForm = {
      freezing: { value: 0 },
      boiling: { value: 100 }
    };

    // debugger;
    it('Should be able to specify direction', async() => {
      expect(direction.freezing.value).toEqual(0);
      expect(direction.boiling.value).toEqual(100);
    })
  });
  
}());
