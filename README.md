# hexo-diy-strict

![hexo-diy-strict](diy-strict.jpg)

diy-strict是基于[strict主题](https://github.com/unmric/hexo-theme-strict)修改而成，在strict基础上进行了如下修改:

1. 增加了对IE7的兼容
2. 将布局改为两栏式
3. 增加了部分widget(about/categories/links)
4. 使用多说作为默认评论组件，hexo-diy-strict/_config.yml中填写多说的`short_name` 
5. 其它细节处的样式调整

## Installation

**Install**
```
$ npm install hexo-renderer-jade --save
$ git clone git@github.com:Bubblings/hexo-diy-strict.git themes/strict
```

**Enable**

Modify `theme` setting in `_config.yml` to `hexo-diy-strict`.


## Browser Support
- IE 7+
- Latest Stable: Firefox, Chrome, Safari

## License
MIT