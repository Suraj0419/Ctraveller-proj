class RouteStartTransaction {
  get Heading() {
    return $('h2');
  }
  get HeadingText() {
    return $('h2').getText()
  }
  get Heading1() {
    return $('h1');
  }
  get HeadingText1() {
    return $('h1').getText();
  }

  get HeadingElement() {
    return $('//*[@id="root"]/div/div/main/div[2]/div[2]/form/h1');
  }
}


export default new RouteStartTransaction();
