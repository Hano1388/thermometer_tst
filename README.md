# Thermometer

A simple Thermometer tool that allows users to upload a **.csv** file of temprature points

### How it works
- To run the program, clone the project into your directory and simply run the **index.html** file.
- To run the tests, run **SpecRunner.html**

- I provided a sample *.CSV* file, please make sure to provide an identical file or use the same file.

*NOTE:*
- In 'js/specs/processTest.spec.js' I am skiping the *show* function and *setAttribute* as they both have nothing to do with tests
```js
  var show = () => {
    return true;
  }

  if (show()) {
    pending();
  }

  var setAttribute = () => {
    return true;
  }

  if (setAttribute()) {
    pending();
  }
