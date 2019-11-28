#!/bin/bash -xe

cat > index.html <<EOF
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="https://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>Directory listing</title>
  </head>
  <body>
    <table style="width:100%;border: 1px solid black;">
      <tr>
        <th>SPS version</th>
        <th>SPS Plugin SDK</th>
      </tr>
EOF

cat sdk_versions.csv | awk -F , '{
INDENT="  "
INDENT3=INDENT INDENT INDENT
INDENT4=INDENT3 INDENT
print INDENT3 "<tr>"
print INDENT4 "<td><a href=\"https://www.oneidentity.com/products/one-identity-safeguard-for-privileged-sessions/\">SPS</a> " $2 "</td>"
print INDENT4 "<td><a href=\"" $1 "/index.html\">SPS Plugin SDK " $1 "</a></td>"
print INDENT3 "</tr>"
}' >> index.html

cat >> index.html <<EOF
    </table>
  </body>
</html>
EOF
