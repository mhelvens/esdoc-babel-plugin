const babel = require('babel-core');

exports.onHandleCode = (event) => {
  try {
    const result = babel.transform(event.data.code, event.data.option);
    event.data.code = result.code;
  } catch (error) {
    console.error(error);
  }
};
