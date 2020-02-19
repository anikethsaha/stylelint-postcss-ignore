const run = require('./helper/runplugin');

it('should throw error for adding ignore comment at selector', (done) => {
  run(`/* postcss-ignore-line */
  ul li {
    padding: 5px;
  }`).then((res) => {
    expect(res[0].text).toMatchSnapshot();
    done();
  });
});

it('should not throw any error message if comment used over decl', (done) => {
  run(`
  ul li {
    /* postcss-ignore-line */
    padding: 5px;
  }`).then((res) => {
    expect(res.length).toBe(0);
    done();
  });
});

it('should throw error for adding ignore comment at atRule', (done) => {
  run(`
  /* postcss-ignore-line */
 @media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
  `).then((res) => {
    expect(res[0].text).toMatchSnapshot();
    done();
  });
});
