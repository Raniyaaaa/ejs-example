
exports.getContactUs = (req,res,next)=>{
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contact-us',
        formsCSS: true,
        contactCSS: true,
        activeContactUs: true,
      });
}

exports.postContactUs = (req,res,next)=>{
    const { name, email } = req.body;
    console.log(`Name: ${name}, Email: ${email}`);
    res.redirect('/success');
}

exports.getSuccess = (req, res, next) => {
    res.render('success', {
      pageTitle: 'Success',
      path: '/success',
    });
};