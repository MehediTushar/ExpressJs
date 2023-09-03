const express = require("express");
const router = express.Router();
const {
create: createBlog,
  read: readBlog,
  delete: deleteBlog,
  update: updateBlog,
  } = require("../Controllers/BlogController");
  router.get("/blogs/create", createBlog);
  router.get("/blogs/read/:id", readBlog);
  router.get("/blogs/delete/:id", deleteBlog);
  router.get("/blogs/update/:id", updateBlog);

//   Blog Detail
  const {
    create: createBlogDetails,
  read: readBlogDetails,
  delete: deleteBlogDetails,
  update: updateBlogDetails,
  } = require("../Controllers/BlogDetailsController");
  router.get("/blogs/details/create", createBlogDetails);
  router.get("/blogs/details/read/:id", readBlogDetails);
  router.get("/blogs/details/delete/:id", deleteBlogDetails);
  router.get("/blogs/details/update/:id", updateBlogDetails);

    //  Blog Detail end

    //   CommentController Detail
  const {
    create: createComment,
  read: readComment,
  delete: deleteComment,
  update: updateComment,
  } = require("../Controllers/CommentController");
  router.get("/comments/create", createComment);
  router.get("/comments/read/:id", readComment);
  router.get("/comments/delete/:id", deleteComment);
  router.get("/comments/update/:id", updateComment);
  
    //  CommentController Detail end

     //   MessageController Detail
  const {
    create: createMessage,
  read: readMessage,
  delete: deleteMessage,
  update: updateMessage,
  } = require("../Controllers/MessageController");
  router.get("/messages/create", createMessage);
  router.get("/messages/read/:id", readMessage);
  router.get("/messages/delete/:id", deleteMessage);
  router.get("/messages/update/:id", updateMessage);
  
    //  MessageController Detail end

   //   PortfolioController Detail
   const {
    create: createProtfolio,
  read: readProtfolio,
  delete: deleteProtfolio,
  update: updateProtfolio,
  } = require("../Controllers/PortfolioController");
  router.get("/protfolios/create", createProtfolio);
  router.get("/protfolios/read/:id", readProtfolio);
  router.get("/protfolios/delete/:id", deleteProtfolio);
  router.get("/protfolios/update/:id", updateProtfolio);
  
    //  PortfolioController Detail end

  //   ProductController Detail
  const {
    create: createProduct,
  read: readProduct,
  delete: deleteProduct,
  update: updateProduct,
  } = require("../Controllers/ProductController");
  router.get("/products/create", createProduct);
  router.get("/products/read/:id", readProduct);
  router.get("/products/delete/:id", deleteProduct);
  router.get("/products/update/:id", updateProduct);
  
    //  ProductController Detail end

  //   ProfitController Detail
  const {
    create: createProfit,
    read: readProfit,
    delete: deleteProfit,
    update: updateProfit,
  } = require("../Controllers/ProfitController");
  router.get("/profits/create", createProfit);
  router.get("/profits/read/:id", readProfit);
  router.get("/profits/delete/:id", deleteProfit);
  router.get("/profits/update/:id", updateProfit);
  
    //  ProfitController Detail end

  //   projectController Detail
  const {
    create: createProject,
    read: readProject,
    delete: deleteProject,
    update: updateProject,
  } = require("../Controllers/projectController");
  router.get("/project/create", createProject);
  router.get("/project/read/:id", readProject);
  router.get("/project/delete/:id", deleteProject);
  router.get("/project/update/:id", updateProject);
  
    //  projectController Detail end

//   ServiceController Detail
const {
    create: createService,
    read: readService,
    delete: deleteService,
    update: updateService,
  } = require("../Controllers/ServiceController");
  router.get("/services/create", createService);
  router.get("/services/read/:id", readService);
  router.get("/services/delete/:id", deleteService);
  router.get("/services/update/:id", updateService);
  
    //  ServiceController Detail end

//   TitleController Detail
const {
    create: createTitle,
    read: readTitle,
    delete: deleteTitle,
    update: updateTitle,
  } = require("../Controllers/TitleController");
  router.get("/titles/create", createTitle);
  router.get("/titles/read/:id", readTitle);
  router.get("/titles/delete/:id", deleteTitle);
  router.get("/titles/update/:id", updateTitle);
  
    //  TitleController Detail end


  module.exports = router;