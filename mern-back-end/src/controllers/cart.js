const Cart = require('../models/cart');


exports.addItemToCart = (req , res, next) => {
  // res.status(200).json({
  //   message : "cart"
  // })

  
  Cart.findOne({ user : req.user._id })
  .exec((error , cart) => {
    if(error)
    {
      res.status(400).json({
        error : error
      })
    }

    if(cart){
      // If cart exists update the quantity
      const product = req.body.cartItems.product;
      const item = cart.cartItems.find(c => c.product == product);

      let condition , action;


      if(item){

        condition = { "user" : req.user._id , "cartItems.product" : product};
        action = { 
          "$set":{
            "cartItems.$" : {
              ...req.body.cartItems,
              quantity : item.quantity + req.body.cartItems.quantity
            }
          }

        }

        // Cart.findOneAndUpdate( { "user" : req.user._id , "cartItems.product" : product},{
        //   // The problem with this is that instead of updating only that item
        //   // It updates the entire cart thus if we have 2 items and we update 1 of those items , the entire cart will be updated to that item thus losing the other item
        //   // "$set":{
        //   //   "cartItems" : {
        //   //     ...req.body.cartItems,
        //   //     quantity : item.quantity + req.body.cartItems.quantity
        //   //   }
        //   // }

          

        //   "$set":{
        //     "cartItems.$" : {
        //       ...req.body.cartItems,
        //       quantity : item.quantity + req.body.cartItems.quantity
        //     }
        //   }

        // })
        // Cart.findOneAndUpdate(condition,action)
        // .exec((error , _cart) => {
        //   if(error)
        //   {
        //     res.status(400).json({
        //       error : error
        //     })
        //   }

        //   if(_cart)
        //   {
        //     res.status(201).json({
        //       cart : _cart
        //     })
        //   }

        // })
      }else{
        condition = { user : req.user._id };
        action = {
          "$push":{
            "cartItems" : req.body.cartItems
          }
        };
      } 
      Cart.findOneAndUpdate(condition,action)
      .exec((error , _cart) => {
        if(error)
        {
          res.status(400).json({
            error : error
          })
        }

        if(_cart)
        {
          res.status(201).json({
            cart : _cart
          })
        }

      })

    }
    else
    {
      // If cart does not exists create the cart

      const cart = new Cart ({
        user : req.user._id,
        cartItems : [req.body.cartItems]
      })

      cart.save((error , cart) => {
        if(error)
        {
          res.status(400).json({
            error : error
          })
        }

        if(cart)
        {
          res.status(201).json({
            cart : cart
          })
        }
      })
    }

  })

   

} 