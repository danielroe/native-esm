async function dynamicImports() {
    const results = await Promise.all([
      import('esm'),
      import('cjs'),
      import('js-cjs'),
      import('esm-module'),
      // import('js-esm')
    ])
    console.log({ dynamicImports: results })
}

dynamicImports()