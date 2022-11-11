exports.tryRequireAjv = function () {
  try {
    console.log("Loading AJV")
    const ajv =  require('ajv')
    console.log("Loaded AJV")
    return ajv
  } catch (err) {
    // no problem... when we need Ajv we will throw a neat exception
  }
}
