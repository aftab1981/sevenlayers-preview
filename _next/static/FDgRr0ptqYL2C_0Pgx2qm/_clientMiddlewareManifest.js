self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/sevenlayers-preview(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|_next\\/static|_next\\/image|favicon|.*\\.(?:png|jpg|jpeg|svg|ico|webp|txt|xml)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|_next/static|_next/image|favicon|.*\\.(?:png|jpg|jpeg|svg|ico|webp|txt|xml)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()