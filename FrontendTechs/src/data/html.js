export const html = {
  img: 'html.png',
  name: "HTML",
  def: "HTML (HyperText Markup Language) is the standard markup language used to create and structure web pages. It defines the structure of content such as headings, paragraphs, images, links, tables, and forms.",
  example: "<!DOCTYPE html>\n<html>\n<head>\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <p>Welcome to HTML.</p>\n</body>\n</html>"
}

export const htmlSubTopics = [
  {
    name: "HTML Elements and Tags",
    def: "HTML elements are the building blocks of web pages. An element generally consists of an opening tag, content, and a closing tag. Some elements are void elements and do not require closing tags.",
    example: "<h1>Heading</h1>\n<p>This is a paragraph.</p>\n<br>\n<hr>"
  },
  {
    name: "HTML Attributes",
    def: "Attributes provide additional information about HTML elements. They are written inside the opening tag and usually consist of a name and value.",
    example: "<img src=\"image.jpg\" alt=\"Nature Image\" width=\"300\">\n<a href=\"https://example.com\" target=\"_blank\">Visit Website</a>"
  },
  {
    name: "HTML Comments",
    def: "HTML comments are used to write notes inside HTML code. They are ignored by the browser and are not displayed on the webpage.",
    example: "<!-- This is an HTML comment -->\n<h1>Hello World</h1>\n<!-- This is another comment -->"
  },
  {
    name: "HTML Nesting",
    def: "Nesting means placing one HTML element inside another element. Proper nesting is important for maintaining a valid document structure.",
    example: "<div>\n  <h1>My Website</h1>\n  <p>This is a paragraph inside a div.</p>\n</div>"
  },
  {
    name: "Block-Level and Inline Elements",
    def: "Block-level elements generally start on a new line and occupy the available width. Inline elements occupy only the space required by their content and do not normally start on a new line.",
    example: "<div>This is a block element.</div>\n<div>Another block element.</div>\n\n<span>This is inline.</span>\n<strong>This is also inline.</strong>"
  },
  {
    name: "HTML Entities",
    def: "HTML entities are special character codes used to display reserved characters and symbols that might otherwise be interpreted as HTML markup.",
    example: "<p>Less than: &lt;</p>\n<p>Greater than: &gt;</p>\n<p>Ampersand: &amp;</p>\n<p>Copyright: &copy;</p>\n<p>Registered: &reg;</p>"
  },

  // 2. HTML Text Formatting
  {
    name: "HTML Headings (h1 to h6)",
    def: "HTML provides six levels of headings, from h1 to h6, with h1 representing the highest level of heading and h6 the lowest. Headings help organize content and improve accessibility.",
    example: "<h1>Level 1 Heading</h1>\n<h2>Level 2 Heading</h2>\n<h3>Level 3 Heading</h3>\n<h4>Level 4 Heading</h4>\n<h5>Level 5 Heading</h5>\n<h6>Level 6 Heading</h6>"
  },
  {
    name: "HTML Paragraphs",
    def: "The paragraph element is used to define a block of text. Browsers automatically add spacing before and after paragraphs.",
    example: "<p>This is the first paragraph.</p>\n<p>This is the second paragraph.</p>"
  },
  {
    name: "Line Break and Horizontal Rule",
    def: "The br element creates a line break within text, while the hr element represents a thematic break between sections of content.",
    example: "<p>Hello<br>Welcome to HTML.</p>\n<hr>\n<p>This is another section.</p>"
  },
  {
    name: "HTML Text Formatting Tags",
    def: "HTML provides formatting elements to emphasize, highlight, or change the appearance and meaning of text. Examples include bold, italic, underline, strong, and emphasis elements.",
    example: "<b>Bold Text</b>\n<strong>Important Text</strong>\n<i>Italic Text</i>\n<em>Emphasized Text</em>\n<u>Underlined Text</u>\n<mark>Highlighted Text</mark>\n<small>Small Text</small>\n<del>Deleted Text</del>\n<ins>Inserted Text</ins>\n<sub>Subscript</sub>\n<sup>Superscript</sup>"
  },
  {
    name: "HTML Preformatted Text",
    def: "The pre element displays text exactly as written in the HTML source, preserving spaces and line breaks. It is commonly used for displaying code or formatted text.",
    example: "<pre>\nName: John\nAge: 25\nCity: Delhi\n</pre>"
  },
  {
    name: "HTML Code and Keyboard Elements",
    def: "HTML provides special elements for representing programming code, keyboard input, computer output, and sample variables.",
    example: "<code>console.log('Hello World');</code>\n<p>Press <kbd>Ctrl + C</kbd> to copy.</p>\n<samp>File saved successfully.</samp>\n<p>Variable: <var>x</var></p>"
  },
  {
    name: "HTML Quotations",
    def: "HTML provides elements for displaying quotations. The blockquote element represents longer quotations, while the q element represents short inline quotations.",
    example: "<blockquote cite=\"https://example.com\">\n  Learning never stops.\n</blockquote>\n\n<p>He said, <q>Practice makes perfect.</q></p>"
  },
  {
    name: "HTML Abbreviations and Address",
    def: "The abbr element represents abbreviations or acronyms, while the address element provides contact information for a person or organization.",
    example: "<p><abbr title=\"HyperText Markup Language\">HTML</abbr> is used to structure web pages.</p>\n\n<address>\n  Contact: example@gmail.com<br>\n  New Delhi, India\n</address>"
  },

  // 3. HTML Lists
  {
    name: "Ordered Lists",
    def: "An ordered list displays a collection of items in a numbered or otherwise ordered sequence. It uses the ol element with li elements for individual items.",
    example: "<ol>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ol>"
  },
  {
    name: "Unordered Lists",
    def: "An unordered list displays a collection of items using bullet points. It uses the ul element with li elements.",
    example: "<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n  <li>Orange</li>\n</ul>"
  },
  {
    name: "Description Lists",
    def: "A description list is used to display terms and their corresponding descriptions. It uses dl for the list, dt for terms, and dd for descriptions.",
    example: "<dl>\n  <dt>HTML</dt>\n  <dd>Structures web pages.</dd>\n  <dt>CSS</dt>\n  <dd>Styles web pages.</dd>\n</dl>"
  },
  {
    name: "Nested Lists",
    def: "Nested lists allow you to place one list inside another list item. They are useful for displaying hierarchical information and multilevel menus.",
    example: "<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend</li>\n</ul>"
  },

  // 4. Links and Navigation
  {
    name: "HTML Anchor Tags",
    def: "The anchor element is used to create hyperlinks that navigate users to another webpage, website, file, or section of the current page.",
    example: "<a href=\"https://google.com\">Visit Google</a>\n\n<a href=\"about.html\">About Us</a>"
  },
  {
    name: "HTML Link Attributes",
    def: "Anchor elements support attributes such as href, target, rel, download, and title to control navigation behavior and provide additional information.",
    example: "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\" title=\"Visit Example\">Open Website</a>\n\n<a href=\"document.pdf\" download>Download PDF</a>"
  },
  {
    name: "Internal Page Navigation",
    def: "Internal navigation allows users to jump to a particular section of the same webpage by using an element ID with the anchor href attribute.",
    example: "<nav>\n  <a href=\"#home\">Home</a>\n  <a href=\"#about\">About</a>\n</nav>\n\n<section id=\"home\">\n  <h2>Home Section</h2>\n</section>\n\n<section id=\"about\">\n  <h2>About Section</h2>\n</section>"
  },
  {
    name: "Email and Telephone Links",
    def: "HTML supports special URL schemes that allow users to open their email application or initiate a phone call by clicking a link.",
    example: "<a href=\"mailto:example@gmail.com\">Send Email</a>\n\n<a href=\"tel:+919876543210\">Call Us</a>"
  },
  {
    name: "HTML Navigation Element",
    def: "The nav element represents a section containing major navigation links. It is commonly used for website menus, navigation bars, and page navigation.",
    example: "<nav>\n  <a href=\"index.html\">Home</a>\n  <a href=\"about.html\">About</a>\n  <a href=\"services.html\">Services</a>\n  <a href=\"contact.html\">Contact</a>\n</nav>"
  },

  // 5. Images
  {
    name: "HTML Images",
    def: "The img element is used to display images on a webpage. The src attribute specifies the image location, and the alt attribute provides alternative text.",
    example: "<img src=\"image.jpg\" alt=\"Beautiful Mountain\" width=\"400\" height=\"300\">"
  },
  {
    name: "Image Attributes",
    def: "Image attributes such as src, alt, width, height, loading, and title help control image sources, dimensions, accessibility, and loading behavior.",
    example: "<img\n  src=\"profile.jpg\"\n  alt=\"User Profile\"\n  width=\"200\"\n  height=\"200\"\n  loading=\"lazy\"\n  title=\"Profile Picture\"\n>"
  },
  {
    name: "HTML Figure and Figcaption",
    def: "The figure element groups self-contained content such as images, diagrams, or illustrations. The figcaption element provides a caption for that content.",
    example: "<figure>\n  <img src=\"nature.jpg\" alt=\"Nature Landscape\" width=\"400\">\n  <figcaption>Beautiful nature landscape.</figcaption>\n</figure>"
  },
  {
    name: "HTML Picture Element",
    def: "The picture element allows browsers to select different image sources based on screen size, resolution, or supported image formats.",
    example: "<picture>\n  <source media=\"(max-width: 600px)\" srcset=\"mobile.jpg\">\n  <source media=\"(min-width: 601px)\" srcset=\"desktop.jpg\">\n  <img src=\"desktop.jpg\" alt=\"Responsive Image\">\n</picture>"
  },
  {
    name: "Responsive Images and Srcset",
    def: "The srcset and sizes attributes allow browsers to choose an appropriate image based on screen size and device resolution, improving performance.",
    example: "<img\n  src=\"small.jpg\"\n  srcset=\"small.jpg 480w, medium.jpg 800w, large.jpg 1200w\"\n  sizes=\"(max-width: 600px) 480px, 800px\"\n  alt=\"Responsive Landscape\"\n>"
  },

  // 6. Tables
  {
    name: "HTML Tables",
    def: "The table element is used to display data in rows and columns. It consists of table rows, table header cells, and table data cells.",
    example: "<table>\n  <tr>\n    <th>Name</th>\n    <th>Age</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>25</td>\n  </tr>\n</table>"
  },
  {
    name: "Table Rows, Headers and Data",
    def: "The tr element defines a table row, th defines a header cell, and td defines a regular data cell.",
    example: "<table>\n  <tr>\n    <th>Product</th>\n    <th>Price</th>\n  </tr>\n  <tr>\n    <td>Laptop</td>\n    <td>50000</td>\n  </tr>\n</table>"
  },
  {
    name: "Table Caption",
    def: "The caption element defines a title or description for an HTML table. It helps users understand what information the table contains.",
    example: "<table>\n  <caption>Student Records</caption>\n  <tr>\n    <th>Name</th>\n    <th>Marks</th>\n  </tr>\n  <tr>\n    <td>John</td>\n    <td>85</td>\n  </tr>\n</table>"
  },
  {
    name: "Table Head, Body and Footer",
    def: "HTML tables can be organized into thead, tbody, and tfoot sections. These elements group header rows, main data rows, and footer rows.",
    example: "<table>\n  <thead>\n    <tr><th>Item</th><th>Price</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Book</td><td>200</td></tr>\n    <tr><td>Pen</td><td>20</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Total</td><td>220</td></tr>\n  </tfoot>\n</table>"
  },
  {
    name: "Colspan and Rowspan",
    def: "The colspan attribute allows a cell to span multiple columns, while rowspan allows a cell to span multiple rows.",
    example: "<table border=\"1\">\n  <tr>\n    <th colspan=\"2\">Student Details</th>\n  </tr>\n  <tr>\n    <td rowspan=\"2\">John</td>\n    <td>HTML</td>\n  </tr>\n  <tr>\n    <td>CSS</td>\n  </tr>\n</table>"
  },
  {
    name: "Table Column Groups",
    def: "The colgroup and col elements are used to group table columns and apply shared properties to them.",
    example: "<table>\n  <colgroup>\n    <col span=\"1\" style=\"background-color: lightblue\">\n    <col span=\"1\" style=\"background-color: lightyellow\">\n  </colgroup>\n  <tr><th>Name</th><th>Age</th></tr>\n  <tr><td>John</td><td>25</td></tr>\n</table>"
  },

  // 7. HTML Forms
  {
    name: "Introduction to HTML Forms",
    def: "HTML forms are used to collect user input and submit data to a server. They can contain text fields, passwords, radio buttons, checkboxes, dropdowns, and submit buttons.",
    example: "<form action=\"/submit\" method=\"POST\">\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\" name=\"name\">\n  <button type=\"submit\">Submit</button>\n</form>"
  },
  {
    name: "Form Action and Method",
    def: "The action attribute specifies where form data should be submitted, while the method attribute defines the HTTP method used to send the data, commonly GET or POST.",
    example: "<form action=\"/register\" method=\"POST\">\n  <input type=\"text\" name=\"username\">\n  <button type=\"submit\">Register</button>\n</form>\n\n<form action=\"/search\" method=\"GET\">\n  <input type=\"search\" name=\"query\">\n  <button type=\"submit\">Search</button>\n</form>"
  },
  {
    name: "Input Elements",
    def: "The input element creates different types of form controls depending on its type attribute. It supports text, password, email, number, date, file, and many other input types.",
    example: "<input type=\"text\" placeholder=\"Enter Name\">\n<input type=\"password\" placeholder=\"Password\">\n<input type=\"email\" placeholder=\"Email\">\n<input type=\"number\" placeholder=\"Age\">\n<input type=\"date\">\n<input type=\"file\">\n<input type=\"color\">\n<input type=\"range\">"
  },
  {
    name: "Text and Password Inputs",
    def: "Text inputs allow users to enter ordinary text, while password inputs hide entered characters to protect sensitive information during screen display.",
    example: "<label for=\"username\">Username:</label>\n<input type=\"text\" id=\"username\" name=\"username\">\n\n<label for=\"password\">Password:</label>\n<input type=\"password\" id=\"password\" name=\"password\">"
  },
  {
    name: "Email and Number Inputs",
    def: "Email inputs provide basic email format validation, while number inputs allow users to enter numeric values with optional minimum, maximum, and step restrictions.",
    example: "<input type=\"email\" name=\"email\" placeholder=\"Enter Email\" required>\n\n<input type=\"number\" name=\"age\" min=\"18\" max=\"60\" step=\"1\">"
  },
  {
    name: "Radio Buttons",
    def: "Radio buttons allow users to select only one option from a group. Radio buttons belong to the same group when they share the same name attribute.",
    example: "<p>Select Gender:</p>\n<label>\n  <input type=\"radio\" name=\"gender\" value=\"male\"> Male\n</label>\n<label>\n  <input type=\"radio\" name=\"gender\" value=\"female\"> Female\n</label>"
  },
  {
    name: "Checkboxes",
    def: "Checkboxes allow users to select one or multiple options independently. They are commonly used for selecting preferences, interests, or accepting terms.",
    example: "<p>Select Skills:</p>\n<label><input type=\"checkbox\" name=\"skills\" value=\"html\"> HTML</label>\n<label><input type=\"checkbox\" name=\"skills\" value=\"css\"> CSS</label>\n<label><input type=\"checkbox\" name=\"skills\" value=\"js\"> JavaScript</label>"
  },
  {
    name: "Select and Option Elements",
    def: "The select element creates a dropdown list, while option elements define the available choices. The selected attribute specifies the initially selected option.",
    example: "<label for=\"city\">Choose City:</label>\n<select id=\"city\" name=\"city\">\n  <option value=\"\">Select City</option>\n  <option value=\"delhi\">Delhi</option>\n  <option value=\"mumbai\">Mumbai</option>\n  <option value=\"bangalore\">Bangalore</option>\n</select>"
  },
  {
    name: "Textarea",
    def: "The textarea element creates a multiline text input field. It is useful for collecting messages, descriptions, feedback, and other longer text.",
    example: "<label for=\"message\">Message:</label>\n<textarea id=\"message\" name=\"message\" rows=\"5\" cols=\"30\" placeholder=\"Write something...\"></textarea>"
  },
  {
    name: "Label Element",
    def: "The label element provides a descriptive name for a form control. Connecting labels with inputs using the for and id attributes improves accessibility and usability.",
    example: "<label for=\"email\">Email Address:</label>\n<input type=\"email\" id=\"email\" name=\"email\">"
  },
  {
    name: "Fieldset and Legend",
    def: "The fieldset element groups related form controls together, while the legend element provides a title for the group.",
    example: "<fieldset>\n  <legend>Personal Information</legend>\n  <label for=\"name\">Name:</label>\n  <input type=\"text\" id=\"name\">\n  <label for=\"age\">Age:</label>\n  <input type=\"number\" id=\"age\">\n</fieldset>"
  },
  {
    name: "Form Validation Attributes",
    def: "HTML provides built-in form validation attributes such as required, minlength, maxlength, min, max, pattern, and step to validate user input before submission.",
    example: "<form>\n  <input type=\"text\" required minlength=\"3\" maxlength=\"20\">\n  <input type=\"email\" required>\n  <input type=\"number\" min=\"18\" max=\"60\">\n  <input type=\"text\" pattern=\"[A-Za-z]+\">\n  <button type=\"submit\">Submit</button>\n</form>"
  },
  {
    name: "Form Input Attributes",
    def: "Input attributes control the behavior of form fields. Common attributes include placeholder, value, name, readonly, disabled, required, autofocus, autocomplete, and checked.",
    example: "<input type=\"text\" name=\"username\" placeholder=\"Username\" required autofocus>\n<input type=\"text\" value=\"John\" readonly>\n<input type=\"text\" value=\"Disabled\" disabled>\n<input type=\"checkbox\" checked>"
  },
  {
    name: "HTML Datalist",
    def: "The datalist element provides predefined suggestions for an input field. Users can select a suggestion or enter their own value.",
    example: "<label for=\"browser\">Choose Browser:</label>\n<input list=\"browsers\" id=\"browser\" name=\"browser\">\n<datalist id=\"browsers\">\n  <option value=\"Chrome\">\n  <option value=\"Firefox\">\n  <option value=\"Safari\">\n</datalist>"
  },
  {
    name: "HTML Output Element",
    def: "The output element represents the result of a calculation or user action, commonly used with forms and JavaScript.",
    example: "<form oninput=\"result.value = Number(a.value) + Number(b.value)\">\n  <input type=\"number\" id=\"a\" value=\"10\">\n  +\n  <input type=\"number\" id=\"b\" value=\"20\">\n  =\n  <output name=\"result\">30</output>\n</form>"
  },

  // 8. HTML5 Semantic Elements
  {
    name: "Introduction to Semantic HTML",
    def: "Semantic HTML uses meaningful elements that describe the purpose of their content. Semantic elements improve accessibility, SEO, and code readability.",
    example: "<header>Website Header</header>\n<nav>Navigation Links</nav>\n<main>Main Content</main>\n<footer>Website Footer</footer>"
  },
  {
    name: "Header Element",
    def: "The header element represents introductory content for a webpage or a section. It commonly contains logos, headings, navigation, and introductory information.",
    example: "<header>\n  <h1>My Website</h1>\n  <p>Welcome to our website.</p>\n</header>"
  },
  {
    name: "Footer Element",
    def: "The footer element represents footer content for a webpage or section. It commonly contains copyright information, contact details, and related links.",
    example: "<footer>\n  <p>&copy; 2026 My Website</p>\n  <a href=\"contact.html\">Contact Us</a>\n</footer>"
  },
  {
    name: "Main Element",
    def: "The main element represents the primary content of a webpage. A document should generally contain only one visible main element.",
    example: "<main>\n  <h1>Welcome to Our Website</h1>\n  <p>This is the main page content.</p>\n</main>"
  },
  {
    name: "Section Element",
    def: "The section element represents a thematic grouping of related content, usually with its own heading.",
    example: "<section>\n  <h2>Our Services</h2>\n  <p>We provide web development services.</p>\n</section>"
  },
  {
    name: "Article Element",
    def: "The article element represents independent, self-contained content that can be distributed or reused separately, such as blog posts, news articles, and forum posts.",
    example: "<article>\n  <h2>Learning HTML</h2>\n  <p>HTML is the foundation of web development.</p>\n</article>"
  },
  {
    name: "Aside Element",
    def: "The aside element represents content that is indirectly related to the main content, such as sidebars, related articles, or advertisements.",
    example: "<aside>\n  <h3>Related Articles</h3>\n  <a href=\"#html\">Learn HTML</a>\n</aside>"
  },
  {
    name: "Details and Summary",
    def: "The details element creates an expandable section that users can open or close. The summary element provides the visible heading for that section.",
    example: "<details>\n  <summary>What is HTML?</summary>\n  <p>HTML is a markup language used to structure web pages.</p>\n</details>"
  },
  {
    name: "Dialog Element",
    def: "The dialog element represents a dialog box or modal window. JavaScript can open and close it using methods such as showModal(), show(), and close().",
    example: "<dialog id=\"myDialog\">\n  <h2>Hello!</h2>\n  <p>This is a dialog box.</p>\n  <button onclick=\"myDialog.close()\">Close</button>\n</dialog>\n\n<button onclick=\"myDialog.showModal()\">Open Dialog</button>"
  },

  // 9. Audio and Video
  {
    name: "HTML Audio",
    def: "The audio element embeds sound content into a webpage. It supports attributes such as controls, autoplay, loop, muted, and preload.",
    example: "<audio controls>\n  <source src=\"music.mp3\" type=\"audio/mpeg\">\n  Your browser does not support audio.\n</audio>"
  },
  {
    name: "HTML Video",
    def: "The video element embeds video content into a webpage. It supports controls, autoplay, muted, loop, poster, width, and height attributes.",
    example: "<video width=\"500\" controls poster=\"thumbnail.jpg\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  Your browser does not support video.\n</video>"
  },
  {
    name: "Audio and Video Sources",
    def: "The source element allows multiple media sources to be provided. The browser selects a supported source based on its format and compatibility.",
    example: "<video controls width=\"400\">\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n</video>"
  },
  {
    name: "HTML Track and Subtitles",
    def: "The track element adds text tracks such as subtitles, captions, descriptions, and chapters to audio or video media.",
    example: "<video controls width=\"500\">\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <track src=\"subtitles.vtt\" kind=\"subtitles\" srclang=\"en\" label=\"English\" default>\n</video>"
  },
  {
    name: "HTML Iframe",
    def: "The iframe element embeds another HTML document or external content inside the current webpage. It is commonly used for maps, videos, and external pages.",
    example: "<iframe\n  src=\"https://www.youtube.com/embed/VIDEO_ID\"\n  width=\"560\"\n  height=\"315\"\n  title=\"YouTube Video\"\n  allowfullscreen\n></iframe>"
  },

  // 10. HTML Metadata and Head Elements
  {
    name: "HTML Meta Tags",
    def: "Meta elements provide information about an HTML document, such as character encoding, description, author, keywords, and viewport settings. They are placed inside the head element.",
    example: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"Learn HTML from beginner to advanced.\">\n  <meta name=\"author\" content=\"John\">\n  <meta name=\"keywords\" content=\"HTML, CSS, JavaScript\">\n</head>"
  },
  {
    name: "HTML Viewport",
    def: "The viewport meta tag controls how a webpage is displayed on different devices. It is essential for creating responsive webpages.",
    example: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"
  },
  {
    name: "HTML Title Element",
    def: "The title element defines the title of the webpage. It appears in the browser tab and is commonly used by search engines when displaying search results.",
    example: "<head>\n  <title>My First Website</title>\n</head>"
  },
  {
    name: "HTML Favicon",
    def: "A favicon is a small icon associated with a website. It appears in browser tabs, bookmarks, and other browser interfaces.",
    example: "<head>\n  <link rel=\"icon\" type=\"image/png\" href=\"favicon.png\">\n</head>"
  },
  {
    name: "HTML Link Element",
    def: "The link element defines relationships between the current document and external resources. It is commonly used to connect CSS files and favicon resources.",
    example: "<head>\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <link rel=\"icon\" href=\"favicon.ico\">\n</head>"
  },
  {
    name: "HTML Script Element",
    def: "The script element is used to include or reference JavaScript code in an HTML document. It supports attributes such as src, async, defer, and type.",
    example: "<script src=\"script.js\" defer></script>\n\n<script>\n  console.log('Hello HTML');\n</script>"
  },
  {
    name: "HTML Base Element",
    def: "The base element specifies the base URL and default target for relative URLs in a document. It must be placed inside the head element.",
    example: "<head>\n  <base href=\"https://example.com/\" target=\"_blank\">\n</head>\n<body>\n  <a href=\"about.html\">About</a>\n</body>"
  },

  // 11. HTML Global Attributes
  {
    name: "HTML Global Attributes",
    def: "Global attributes can be used on most HTML elements. Examples include id, class, style, title, hidden, lang, dir, tabindex, and contenteditable.",
    example: "<div id=\"container\" class=\"box\" title=\"Information\" style=\"color: blue;\">\n  Hello World\n</div>"
  },
  {
    name: "ID and Class Attributes",
    def: "The id attribute provides a unique identifier for an element, while the class attribute allows multiple elements to share the same identifier for CSS styling or JavaScript selection.",
    example: "<h1 id=\"main-title\">Welcome</h1>\n\n<p class=\"text\">First paragraph</p>\n<p class=\"text\">Second paragraph</p>"
  },
  {
    name: "Style Attribute",
    def: "The style attribute applies inline CSS directly to an HTML element. It is useful for quick styling but external stylesheets are generally better for maintaining larger projects.",
    example: "<h1 style=\"color: blue; font-size: 32px;\">Hello World</h1>\n<p style=\"background-color: yellow;\">Welcome!</p>"
  },
  {
    name: "Data Attributes",
    def: "Custom data attributes allow developers to store additional information directly on HTML elements. They use the data- prefix and can be accessed through JavaScript.",
    example: "<button data-id=\"101\" data-name=\"John\">View User</button>\n\n<script>\n  const button = document.querySelector('button');\n  console.log(button.dataset.id);\n  console.log(button.dataset.name);\n</script>"
  },
  {
    name: "Contenteditable Attribute",
    def: "The contenteditable attribute makes an element's content editable directly in the browser.",
    example: "<div contenteditable=\"true\">\n  You can edit this text directly.\n</div>"
  },
  {
    name: "Hidden Attribute",
    def: "The hidden attribute hides an HTML element from normal presentation. It can be useful for content that should not currently be displayed.",
    example: "<p hidden>This content is hidden.</p>\n<p>This content is visible.</p>"
  },
  {
    name: "Tabindex Attribute",
    def: "The tabindex attribute controls whether an element can receive keyboard focus and its position in sequential keyboard navigation.",
    example: "<button tabindex=\"1\">First</button>\n<button tabindex=\"2\">Second</button>\n<div tabindex=\"0\">Focusable Div</div>"
  },

  // 12. HTML5 Advanced Features
  {
    name: "HTML Canvas",
    def: "The canvas element provides a drawing area that JavaScript can use to create graphics, animations, charts, and games.",
    example: "<canvas id=\"myCanvas\" width=\"300\" height=\"150\"></canvas>\n\n<script>\n  const canvas = document.getElementById('myCanvas');\n  const ctx = canvas.getContext('2d');\n  ctx.fillStyle = 'blue';\n  ctx.fillRect(20, 20, 100, 60);\n</script>"
  },
  {
    name: "HTML SVG",
    def: "SVG (Scalable Vector Graphics) is an XML-based format for creating vector graphics. SVG elements can be embedded directly into HTML and remain sharp at different screen sizes.",
    example: "<svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\">\n  <circle cx=\"60\" cy=\"60\" r=\"40\" fill=\"blue\" />\n  <rect x=\"120\" y=\"20\" width=\"60\" height=\"80\" fill=\"red\" />\n</svg>"
  },
  {
    name: "HTML Geolocation",
    def: "The Geolocation API allows websites to request the user's geographical location through the browser. User permission is required.",
    example: "<button onclick=\"getLocation()\">Get Location</button>\n\n<script>\n  function getLocation() {\n    navigator.geolocation.getCurrentPosition(\n      (position) => {\n        console.log(position.coords.latitude);\n        console.log(position.coords.longitude);\n      },\n      (error) => console.log(error.message)\n    );\n  }\n</script>"
  },
  {
    name: "HTML Drag and Drop",
    def: "The HTML Drag and Drop API allows users to drag elements and drop them into designated areas. JavaScript handles the drag and drop events.",
    example: "<div id=\"item\" draggable=\"true\" ondragstart=\"event.dataTransfer.setData('text', event.target.id)\">\n  Drag Me\n</div>\n\n<div ondragover=\"event.preventDefault()\" ondrop=\"event.preventDefault(); this.appendChild(document.getElementById(event.dataTransfer.getData('text')))\">\n  Drop Here\n</div>"
  },
  {
    name: "HTML Web Storage",
    def: "The Web Storage API allows websites to store data in the browser using localStorage and sessionStorage. Local storage persists across browser sessions, while session storage lasts for the current browsing session.",
    example: "<script>\n  localStorage.setItem('username', 'John');\n  console.log(localStorage.getItem('username'));\n\n  sessionStorage.setItem('theme', 'dark');\n  console.log(sessionStorage.getItem('theme'));\n\n  localStorage.removeItem('username');\n</script>"
  },
  {
    name: "HTML Web Workers",
    def: "Web Workers allow JavaScript to run in background threads, keeping the main webpage responsive during intensive tasks. A worker runs in a separate JavaScript context.",
    example: "// main.js\nconst worker = new Worker('worker.js');\nworker.postMessage('Hello Worker');\nworker.onmessage = (event) => {\n  console.log(event.data);\n};\n\n// worker.js\nself.onmessage = (event) => {\n  self.postMessage('Received: ' + event.data);\n};"
  },
  {
    name: "HTML Server-Sent Events",
    def: "Server-Sent Events allow a webpage to receive automatic updates from a server through a persistent HTTP connection. They are useful for live notifications and real-time updates.",
    example: "<script>\n  const source = new EventSource('/events');\n\n  source.onmessage = (event) => {\n    console.log('New update:', event.data);\n  };\n</script>"
  },
  {
    name: "HTML Microdata",
    def: "Microdata is a way to add structured data to HTML elements using attributes such as itemscope, itemtype, and itemprop. It helps machines understand the meaning of webpage content.",
    example: "<div itemscope itemtype=\"https://schema.org/Person\">\n  <h2 itemprop=\"name\">John Doe</h2>\n  <p itemprop=\"jobTitle\">Developer</p>\n</div>"
  },

  // 13. Accessibility and SEO
  {
    name: "HTML Accessibility",
    def: "HTML accessibility means creating webpages that can be used by everyone, including people with disabilities. Proper semantic elements, labels, alternative text, and keyboard navigation improve accessibility.",
    example: "<img src=\"logo.png\" alt=\"Company Logo\">\n\n<label for=\"email\">Email:</label>\n<input type=\"email\" id=\"email\" name=\"email\">\n\n<button type=\"button\">Submit</button>"
  },
  {
    name: "ARIA Attributes",
    def: "ARIA (Accessible Rich Internet Applications) attributes provide additional accessibility information when native HTML semantics are insufficient. Common attributes include aria-label, aria-labelledby, aria-hidden, and aria-expanded.",
    example: "<button aria-label=\"Close menu\">X</button>\n\n<button aria-expanded=\"false\" aria-controls=\"menu\">\n  Open Menu\n</button>\n\n<div id=\"menu\" hidden>Menu Content</div>"
  },
  {
    name: "HTML SEO Best Practices",
    def: "HTML SEO involves using meaningful titles, meta descriptions, semantic elements, descriptive headings, accessible images, and meaningful links to help search engines understand webpage content.",
    example: "<head>\n  <title>Learn HTML - Complete Guide</title>\n  <meta name=\"description\" content=\"Learn HTML from beginner to advanced with practical examples.\">\n  <link rel=\"canonical\" href=\"https://example.com/html\">\n</head>\n<body>\n  <main>\n    <h1>Complete HTML Tutorial</h1>\n    <p>Learn HTML step by step.</p>\n  </main>\n</body>"
  },
  {
    name: "Open Graph Meta Tags",
    def: "Open Graph meta tags control how webpage information appears when shared on social media platforms. They define the title, description, image, and URL of shared content.",
    example: "<meta property=\"og:title\" content=\"My Website\">\n<meta property=\"og:description\" content=\"Welcome to my website.\">\n<meta property=\"og:image\" content=\"https://example.com/image.jpg\">\n<meta property=\"og:url\" content=\"https://example.com\">\n<meta property=\"og:type\" content=\"website\">"
  },
  {
    name: "HTML Structured Data and Schema",
    def: "Structured data provides search engines with additional information about webpage content. JSON-LD is a commonly recommended format for adding schema.org structured data.",
    example: "<script type=\"application/ld+json\">\n{\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Organization\",\n  \"name\": \"My Company\",\n  \"url\": \"https://example.com\"\n}\n</script>"
  },

  // 14. HTML Best Practices
  {
    name: "HTML Validation",
    def: "HTML validation checks whether an HTML document follows the HTML specification and identifies errors such as invalid nesting, missing attributes, and incorrect element usage.",
    example: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Valid HTML</title>\n</head>\n<body>\n  <main>\n    <h1>Welcome</h1>\n    <p>Valid HTML structure.</p>\n  </main>\n</body>\n</html>"
  },
  {
    name: "HTML Best Practices",
    def: "HTML best practices include using semantic elements, proper indentation, meaningful element names, accessible labels, descriptive alt text, valid nesting, and separating HTML structure from CSS and JavaScript.",
    example: "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Website</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <script src=\"script.js\" defer></script>\n</head>\n<body>\n  <header>\n    <h1>My Website</h1>\n  </header>\n  <main>\n    <p>Welcome to my website.</p>\n  </main>\n</body>\n</html>"
  }
];