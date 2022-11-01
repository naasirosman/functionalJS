const website = [
    { familyId: 'a', sku: '' },
    { familyId: 'b', sku: '' }, 
    { sku: 'aa', familyId: '' }, 
    { sku: 'bb', familyId: '' }
  ];

  let familyId = [];
  let skus = [];

  const data = website.reduce((acc, item) => {

    if (item.familyId) {
        acc.familyIds.push(item.familyId);
    } else {
        acc.skus.push(item.sku);
    }
    return acc;
  }, {
    familyIds: [],
    skus: []
  });

  console.log(data);


// {
//   familyIds: ['a', 'b'],
//   skus: ['aa', 'bb']
// }