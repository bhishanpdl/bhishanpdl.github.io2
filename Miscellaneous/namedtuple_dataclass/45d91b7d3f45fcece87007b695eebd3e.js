document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-31007ea0d3bd9f80540adfbc55afc7bd.css">')
document.write('<div id=\"gist103175185\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-namedtuple-csv-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\" data-paste-markdown-skip>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-v>Transaction<\/span> <span class=pl-c1>=<\/span> <span class=pl-s1>collections<\/span>.<span class=pl-en>namedtuple<\/span>(<span class=pl-s>&#39;Transaction&#39;<\/span>,[<span class=pl-s>&#39;sender&#39;<\/span>,<span class=pl-s>&#39;receiver&#39;<\/span>,<span class=pl-s>&#39;date&#39;<\/span>,<span class=pl-s>&#39;amount&#39;<\/span>])<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># read csv<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>for<\/span> <span class=pl-s1>record<\/span> <span class=pl-c1>in<\/span> <span class=pl-en>map<\/span>(<span class=pl-v>Transaction<\/span>.<span class=pl-s1>_make<\/span>, <span class=pl-s1>csv<\/span>.<span class=pl-en>reader<\/span>(<span class=pl-en>open<\/span>(<span class=pl-s>&quot;../sample.csv&quot;<\/span>,<span class=pl-s>&quot;rt&quot;<\/span>))):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-en>print<\/span>(<span class=pl-s1>record<\/span>.<span class=pl-s1>receiver<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC6\" class=\"blob-code blob-code-inner js-file-line\">  <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-c># get results from database<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-s1>cursor<\/span>.<span class=pl-en>execute<\/span>(<span class=pl-s>&quot;SELECT sender,receiver,date,amount FROM transaction_table&quot;<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-k>for<\/span> <span class=pl-s1>record<\/span> <span class=pl-c1>in<\/span> <span class=pl-en>map<\/span>(<span class=pl-v>Transaction<\/span>.<span class=pl-s1>_make<\/span>, <span class=pl-s1>cursor<\/span>.<span class=pl-en>fetchall<\/span>()):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-namedtuple-csv-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-namedtuple-csv-py-LC10\" class=\"blob-code blob-code-inner js-file-line\">  <span class=pl-en>print<\/span>(<span class=pl-s1>record<\/span>.<span class=pl-s1>receiver<\/span>)<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/highsmallxu/45d91b7d3f45fcece87007b695eebd3e/raw/da0d9783c8fdf8969112288ebf5e606b5bd3f2a7/namedtuple-csv.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/highsmallxu/45d91b7d3f45fcece87007b695eebd3e#file-namedtuple-csv-py\">namedtuple-csv.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
