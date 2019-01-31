# Enduro Summernote

Summernote Wysiwyg integration for enduro.js

### Installing

If you have globally installed enduro:

```
enduro install enduro_summernote
```

If not

```
./node_modules/enduro/cli.js install enduro_summernote
```

### Configuration
For configuration information please visit https://www.endurojs.com/docs/enduro-bricks.

After installing enduro_summernote you should have `enduro_summernote` key in your `enduro.json` file. 
Under this key you can put your own configuration of summernote (all configuration options available at (https://summernote.org/deep-dive/)).
If your configuration is empty, all available options are enabled by default.

Sample configuration without font family.

```json
"enduro_summernote": {
  "maxHeight": 300,
  "toolbar": [
    [
      "style",
      [
        "bold",
        "italic",
        "underline",
        "clear"
      ]
    ],
    [
      "font",
      [
        "strikethrough",
        "superscript",
        "subscript"
      ]
    ],
    [
      "fontsize",
      [
        "fontsize"
      ]
    ],
    [
      "para",
      [
        "ul",
        "ol",
        "paragraph",
        "height"
      ]
    ],
    [
      "media",
      [
        "picture",
        "link",
        "video",
        "table",
        "hr"
      ]
    ],
    [
      "code",
      [
        "codeview",
        "fullscreen",
        "undo",
        "redo"
      ]
    ]
  ]
}
```

## Built With

- [Enduro.js](https://www.endurojs.com/) - Minimalistic, lean & mean, node.js cms
- [Summernote](https://summernote.org/) - Simple WYSIWYG editor

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/szuttenbach/enduro_summernote/tags).

## Authors

- **Piotr Szuttenbach** - [Appstract Software](http://appstract.software)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
