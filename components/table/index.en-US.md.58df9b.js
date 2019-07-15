(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{1641:function(n,t){n.exports={content:["section",["p","A table displays rows of data."],["h2","When To Use"],["ul",["li",["p","To display a collection of structured data."]],["li",["p","To sort, search, paginate, filter data."]]],["h2","How To Use"],["p","Specify ",["code","dataSource"]," of Table as an array of data."],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'Mike\'</span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n    address<span class="token punctuation">:</span> <span class="token string">\'10 Downing Street\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'John\'</span><span class="token punctuation">,</span>\n    age<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n    address<span class="token punctuation">:</span> <span class="token string">\'10 Downing Street\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Name\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Age\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    title<span class="token punctuation">:</span> <span class="token string">\'Address\'</span><span class="token punctuation">,</span>\n    dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code","const dataSource = [\n  {\n    key: '1',\n    name: 'Mike',\n    age: 32,\n    address: '10 Downing Street',\n  },\n  {\n    key: '2',\n    name: 'John',\n    age: 42,\n    address: '10 Downing Street',\n  },\n];\n\nconst columns = [\n  {\n    title: 'Name',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: 'Age',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: 'Address',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\n<Table dataSource={dataSource} columns={columns} />;"]]],meta:{category:"Components",cols:1,type:"Data Display",title:"Table",filename:"components/table/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-To-Use",title:"How To Use"},"How To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#Using-in-TypeScript",title:"Using in TypeScript"},"Using in TypeScript"]],["li",["a",{className:"bisheng-toc-h2",href:"#Note",title:"Note"},"Note"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","bordered"],["td","Whether to show all table borders"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","childrenColumnName"],["td","The column contains children to display"],["td","string","[","]"],["td","children"],["td","3.4.2"]],["tr",["td","columns"],["td","Columns of table"],["td",["a",{title:null,href:"https://git.io/vMMXC"},"ColumnProps"],"[","]"],["td","-"],["td"]],["tr",["td","components"],["td","Override default table elements"],["td",["a",{title:null,href:"https://git.io/fANxz"},"TableComponents"]],["td","-"],["td"]],["tr",["td","dataSource"],["td","Data record array to be displayed"],["td","any","[","]"],["td","-"],["td"]],["tr",["td","defaultExpandAllRows"],["td","Expand all rows initially"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","defaultExpandedRowKeys"],["td","Initial expanded row keys"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","expandedRowKeys"],["td","Current expanded row keys"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","expandedRowRender"],["td","Expanded container render for each row"],["td","Function(record, index, indent, expanded):ReactNode"],["td","-"],["td"]],["tr",["td","expandIcon"],["td","Customize row expand Icon. Ref ",["a",{title:null,href:"http://react-component.github.io/table/examples/expandIcon.html"},"example"]],["td","Function(props):ReactNode"],["td","-"],["td","3.11.3"]],["tr",["td","expandRowByClick"],["td","Whether to expand row by clicking anywhere in the whole row"],["td","boolean"],["td",["code","false"]],["td","3.0.1"]],["tr",["td","footer"],["td","Table footer renderer"],["td","Function(currentPageData)"],["td"],["td"]],["tr",["td","indentSize"],["td","Indent size in pixels of tree data"],["td","number"],["td","15"],["td"]],["tr",["td","loading"],["td","Loading status of table"],["td","boolean","|",["a",{title:null,href:"https://ant.design/components/spin-cn/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135"},"more"],")"],["td",["code","false"]],["td"]],["tr",["td","locale"],["td","i18n text including filter, sort, empty text, etc"],["td","object"],["td","filterConfirm: 'Ok' ",["br"]," filterReset: 'Reset' ",["br"]," emptyText: 'No Data' ",["br"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511"},"Default"]],["td"]],["tr",["td","pagination"],["td","Config of pagination. You can ref table pagination ",["a",{title:null,href:"#pagination"},"config"]," or full ",["a",{title:null,href:"/components/pagination/"},["code","pagination"]]," document, hide it by setting it to ",["code","false"]],["td","object"],["td"],["td"]],["tr",["td","rowClassName"],["td","Row's className"],["td","Function(record, index):string"],["td","-"],["td"]],["tr",["td","rowKey"],["td","Row's unique key, could be a string or function that returns a string"],["td","string","|","Function(record):string"],["td",["code","key"]],["td"]],["tr",["td","rowSelection"],["td","Row selection ",["a",{title:null,href:"#rowSelection"},"config"]],["td","object"],["td","null"],["td"]],["tr",["td","scroll"],["td","Set horizontal or vertical scrolling, can also be used to specify the width and height of the scroll area, could be number, percent value, ",["code","true"]," and ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/CSS/width"},"'max-content'"]],["td","{ x: number ","|"," true, y: number }"],["td","-"],["td"]],["tr",["td","showHeader"],["td","Whether to show table header"],["td","boolean"],["td",["code","true"]],["td"]],["tr",["td","size"],["td","Size of table"],["td",["code","default"]," ","|"," ",["code","middle"]," ","|"," ",["code","small"]],["td",["code","default"]],["td"]],["tr",["td","title"],["td","Table title renderer"],["td","Function(currentPageData)"],["td"],["td"]],["tr",["td","onChange"],["td","Callback executed when pagination, filters or sorter is changed"],["td","Function(pagination, filters, sorter, extra: { currentDataSource: [] })"],["td"],["td"]],["tr",["td","onExpand"],["td","Callback executed when the row expand icon is clicked"],["td","Function(expanded, record)"],["td"],["td"]],["tr",["td","onExpandedRowsChange"],["td","Callback executed when the expanded rows change"],["td","Function(expandedRows)"],["td"],["td"]],["tr",["td","onHeaderRow"],["td","Set props on per header row"],["td","Function(column, index)"],["td","-"],["td"]],["tr",["td","onRow"],["td","Set props on per row"],["td","Function(record, index)"],["td","-"],["td"]]]],["h4","onRow usage"],["p","Same as ",["code","onRow"]," ",["code","onHeaderRow"]," ",["code","onCell"]," ",["code","onHeaderCell"]],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Table\n  onRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>record<span class="token punctuation">,</span> rowIndex<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      onClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// click row</span>\n      onDoubleClick<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// double click row</span>\n      onContextMenu<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// right button click row</span>\n      onMouseEnter<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// mouse enter row</span>\n      onMouseLeave<span class="token punctuation">:</span> event <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// mouse leave row</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n  onHeaderRow<span class="token operator">=</span><span class="token punctuation">{</span>column <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment" spellcheck="true">// click header row</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>'},["code","<Table\n  onRow={(record, rowIndex) => {\n    return {\n      onClick: event => {}, // click row\n      onDoubleClick: event => {}, // double click row\n      onContextMenu: event => {}, // right button click row\n      onMouseEnter: event => {}, // mouse enter row\n      onMouseLeave: event => {}, // mouse leave row\n    };\n  }}\n  onHeaderRow={column => {\n    return {\n      onClick: () => {}, // click header row\n    };\n  }}\n/>"]],["h3","Column"],["p","One of the Table ",["code","columns"]," prop for describing the table's columns, Column has the same API."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","align"],["td","specify which way that column is aligned"],["td","'left' ","|"," 'right' ","|"," 'center'"],["td","'left'"],["td","3.3.2"]],["tr",["td","className"],["td","className of this column"],["td","string"],["td","-"],["td"]],["tr",["td","colSpan"],["td","Span of this column's title"],["td","number"],["td"],["td"]],["tr",["td","dataIndex"],["td","Display field of the data record, could be set like ",["code","a.b.c"],", ",["code","a[0].b.c[1]"]],["td","string"],["td","-"],["td"]],["tr",["td","defaultSortOrder"],["td","Default order of sorted values"],["td","'ascend' ","|"," 'descend'"],["td","-"],["td"]],["tr",["td","filterDropdown"],["td","Customized filter overlay"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","filterDropdownVisible"],["td","Whether ",["code","filterDropdown"]," is visible"],["td","boolean"],["td","-"],["td"]],["tr",["td","filtered"],["td","Whether the ",["code","dataSource"]," is filtered"],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","filteredValue"],["td","Controlled filtered value, filter icon will highlight"],["td","string","[","]"],["td","-"],["td"]],["tr",["td","filterIcon"],["td","Customized filter icon"],["td","ReactNode","|","(filtered: boolean) => ReactNode"],["td",["code","false"]],["td"]],["tr",["td","filterMultiple"],["td","Whether multiple filters can be selected"],["td","boolean"],["td",["code","true"]],["td"]],["tr",["td","filters"],["td","Filter menu config"],["td","object","[","]"],["td","-"],["td"]],["tr",["td","fixed"],["td","Set column to be fixed: ",["code","true"],"(same as left) ",["code","'left'"]," ",["code","'right'"]],["td","boolean","|","string"],["td",["code","false"]],["td"]],["tr",["td","key"],["td","Unique key of this column, you can ignore this prop if you've set a unique ",["code","dataIndex"]],["td","string"],["td","-"],["td"]],["tr",["td","render"],["td","Renderer of the table cell. The return value should be a ReactNode, or an object for ",["a",{title:null,href:"#components-table-demo-colspan-rowspan"},"colSpan/rowSpan config"]],["td","Function(text, record, index) {}"],["td","-"],["td"]],["tr",["td","sorter"],["td","Sort function for local sort, see ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"],"'s compareFunction. If you need sort buttons only, set to ",["code","true"]],["td","Function","|","boolean"],["td","-"],["td"]],["tr",["td","sortOrder"],["td","Order of sorted values: ",["code","'ascend'"]," ",["code","'descend'"]," ",["code","false"]],["td","boolean","|","string"],["td","-"],["td"]],["tr",["td","sortDirections"],["td","supported sort way, could be ",["code","'ascend'"],", ",["code","'descend'"]],["td","Array"],["td",["code","['ascend', 'descend']"]],["td","3.15.2"]],["tr",["td","title"],["td","Title of this column"],["td","ReactNode","|","({ sortOrder, filters }) => ReactNode"],["td","-"],["td"]],["tr",["td","width"],["td","Width of this column (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/13825#issuecomment-449889241"},"width not working?"],")"],["td","string","|","number"],["td","-"],["td"]],["tr",["td","onCell"],["td","Set props on per cell"],["td","Function(record, rowIndex)"],["td","-"],["td"]],["tr",["td","onFilter"],["td","Callback executed when the confirm filter button is clicked"],["td","Function"],["td","-"],["td"]],["tr",["td","onFilterDropdownVisibleChange"],["td","Callback executed when ",["code","filterDropdownVisible"]," is changed"],["td","function(visible) {}"],["td","-"],["td"]],["tr",["td","onHeaderCell"],["td","Set props on per header cell"],["td","Function(column)"],["td","-"],["td"]]]],["h3","ColumnGroup"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","title"],["td","Title of the column group"],["td","string","|","ReactNode"],["td","-"],["td"]]]],["h3","pagination"],["p","Properties for pagination."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","position"],["td","specify the position of ",["code","Pagination"]],["td","'top' ","|"," 'bottom' ","|"," 'both'"],["td","'bottom'"],["td","3.3.0"]]]],["p","More about pagination, please check ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"."],["h3","rowSelection"],["p","Properties for row selection."],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","columnWidth"],["td","Set the width of the selection column"],["td","string","|","number"],["td",["code","60px"]],["td","3.3.0"]],["tr",["td","columnTitle"],["td","Set the title of the selection column"],["td","string","|","React.ReactNode"],["td","-"],["td","3.8.0"]],["tr",["td","fixed"],["td","Fixed selection column on the left"],["td","boolean"],["td","-"],["td"]],["tr",["td","getCheckboxProps"],["td","Get Checkbox or Radio props"],["td","Function(record)"],["td","-"],["td"]],["tr",["td","hideDefaultSelections"],["td","Remove the default ",["code","Select All"]," and ",["code","Select Invert"]," selections when ",["a",{title:null,href:"#components-table-demo-row-selection-custom"},"custom selection"]],["td","boolean"],["td",["code","false"]],["td"]],["tr",["td","selectedRowKeys"],["td","Controlled selected row keys"],["td","string","[","]"],["td","[","]"],["td"]],["tr",["td","selections"],["td","Custom selection ",["a",{title:null,href:"#rowSelection"},"config"],", only displays default selections when set to ",["code","true"]],["td","object","[","]","|","boolean"],["td","-"],["td"]],["tr",["td","type"],["td",["code","checkbox"]," or ",["code","radio"]],["td",["code","checkbox"]," ","|"," ",["code","radio"]],["td",["code","checkbox"]],["td"]],["tr",["td","onChange"],["td","Callback executed when selected rows change"],["td","Function(selectedRowKeys, selectedRows)"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Callback executed when select/deselect one row"],["td","Function(record, selected, selectedRows, nativeEvent)"],["td","-"],["td"]],["tr",["td","onSelectAll"],["td","Callback executed when select/deselect all rows"],["td","Function(selected, selectedRows, changeRows)"],["td","-"],["td"]],["tr",["td","onSelectInvert"],["td","Callback executed when row selection is inverted"],["td","Function(selectedRows)"],["td","-"],["td"]]]],["h3","selection"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","key"],["td","Unique key of this selection"],["td","string"],["td","-"],["td"]],["tr",["td","text"],["td","Display text of this selection"],["td","string","|","React.ReactNode"],["td","-"],["td"]],["tr",["td","onSelect"],["td","Callback executed when this selection is clicked"],["td","Function(changeableRowKeys)"],["td","-"],["td"]]]],["h2","Using in TypeScript"],["pre",{lang:"tsx",highlighted:'import { Table } from <span class="token string">\'antd\'</span><span class="token comment" spellcheck="true">;</span>\nimport { ColumnProps } from <span class="token string">\'antd/lib/table\'</span><span class="token comment" spellcheck="true">;</span>\n\ninterface User {\n  key<span class="token punctuation">:</span> number<span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> string<span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token keyword">const</span> columns<span class="token punctuation">:</span> ColumnProps<span class="token operator">&lt;</span>User<span class="token operator">></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>{\n  key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'Name\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n}<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\n<span class="token keyword">const</span> data<span class="token punctuation">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>{\n  key<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Jack\'</span><span class="token punctuation">,</span>\n}<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\nclass UserTable extends Table<span class="token operator">&lt;</span>User<span class="token operator">></span> {}\n\n<span class="token operator">&lt;</span>UserTable columns<span class="token operator">=</span>{columns} dataSource<span class="token operator">=</span>{data} <span class="token operator">/</span><span class="token operator">></span>\n\n<span class="token operator">/</span><span class="token operator">/</span> Use JSX style API\nclass NameColumn extends Table<span class="token punctuation">.</span>Column<span class="token operator">&lt;</span>User<span class="token operator">></span> {}\n\n<span class="token operator">&lt;</span>UserTable dataSource<span class="token operator">=</span>{data}<span class="token operator">></span>\n  <span class="token operator">&lt;</span>NameColumn key<span class="token operator">=</span><span class="token string">"name"</span> title<span class="token operator">=</span><span class="token string">"Name"</span> dataIndex<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>UserTable<span class="token operator">></span>\n\n<span class="token operator">/</span><span class="token operator">/</span> after TypeScript <span class="token number">2.9</span> can write like this\n<span class="token operator">/</span><span class="token operator">/</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>typescriptlang<span class="token punctuation">.</span>org<span class="token operator">/</span>docs<span class="token operator">/</span>handbook<span class="token operator">/</span>release<span class="token operator">-</span>notes<span class="token operator">/</span>typescript<span class="token operator">-</span><span class="token number">2</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">.</span>html#generic<span class="token operator">-</span>type<span class="token operator">-</span>arguments<span class="token operator">-</span><span class="token keyword">in</span><span class="token operator">-</span>jsx<span class="token operator">-</span>elements\n<span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> columns<span class="token operator">=</span>{columns} dataSource<span class="token operator">=</span>{data} <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>Table<span class="token operator">&lt;</span>User<span class="token operator">></span> dataSource<span class="token operator">=</span>{data}<span class="token operator">></span>\n  <span class="token operator">&lt;</span>Table<span class="token punctuation">.</span>Column<span class="token operator">&lt;</span>User<span class="token operator">></span> key<span class="token operator">=</span><span class="token string">"name"</span> title<span class="token operator">=</span><span class="token string">"Name"</span> dataIndex<span class="token operator">=</span><span class="token string">"name"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>Table<span class="token operator">></span>'},["code","import { Table } from 'antd';\nimport { ColumnProps } from 'antd/lib/table';\n\ninterface User {\n  key: number,\n  name: string;\n}\n\nconst columns: ColumnProps<User>[] = [{\n  key: 'name',\n  title: 'Name',\n  dataIndex: 'name',\n}];\n\nconst data: User[] = [{\n  key: 0,\n  name: 'Jack',\n}];\n\nclass UserTable extends Table<User> {}\n\n<UserTable columns={columns} dataSource={data} />\n\n// Use JSX style API\nclass NameColumn extends Table.Column<User> {}\n\n<UserTable dataSource={data}>\n  <NameColumn key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</UserTable>\n\n// after TypeScript 2.9 can write like this\n// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#generic-type-arguments-in-jsx-elements\n<Table<User> columns={columns} dataSource={data} />\n<Table<User> dataSource={data}>\n  <Table.Column<User> key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</Table>"]],["h2","Note"],["p","According to ",["a",{title:null,href:"https://facebook.github.io/react/docs/lists-and-keys.html#keys"},"React documentation"],", every child in array should be assigned a unique key. The values inside ",["code","dataSource"]," and ",["code","columns"]," should follow this in Table, and ",["code","dataSource[i].key"]," would be treated as key value default for ",["code","dataSource"],"."],["p","If ",["code","dataSource[i].key"]," is not provided, then you should specify the primary key of dataSource value via ",["code","rowKey"],". If not, warnings like above will show in browser console."],["p",["img",{title:null,src:"https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",alt:"console warning"}]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// primary key is uid</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// or</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code",'// primary key is uid\nreturn <Table rowKey="uid" />;\n// or\nreturn <Table rowKey={record => record.uid} />;']]]}}}]);