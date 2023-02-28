'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hola mi primer lambda service',
        input: event,
      },
      null,
      2
    ),
  };
};
