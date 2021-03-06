const slugify = require('slugify');
const Category = require('../models/category');

function createCatergories(categories,parentId=null) {
  let categoryList = [];
  let category;
  if(parentId == null)
  {
    category = categories.filter( cat => cat.parentId==undefined);
  }
  else
  {
    category = categories.filter( cat => cat.parentId==parentId);
  }

  for(let categ of category)
  {
    categoryList.push({
      _id : categ._id,
      name : categ.name,
      slug : categ.slug,
      children : createCatergories(categories , categ._id)
    });
  }

  return categoryList;
}

exports.addCategory = (req , res, next) => {
  const categoryObj = {
    name : req.body.name,
    slug : slugify(req.body.name)

  }

  if(req.body.parentId)
  {
    categoryObj.parentId = req.body.parentId
  }

  const cat = new Category(categoryObj)
  cat.save((error , category) => {
    if(error)
    {
      return res.status(400).json({
        error : error
      })
    }
    if(category)
    {
      return res.status(200).json({
        category
      })
    }
  })

}

exports.getCategories = (req , res, next) => {
  Category.find({}) // Empty object => Gets all result
  .exec((error , categories) => {
    if(error)
    {
      return res.status(400).json({
        error : error
      })
    }

    if(categories)
    {

      const categoryList = createCatergories(categories);

      return res.status(200).json({
        categoryList
      })
    }
  })
}
