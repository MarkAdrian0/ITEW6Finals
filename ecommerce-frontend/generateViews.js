const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'src', 'views');
const components = [
  'ProductList',
  'Register',
  'Login',
  'Cart',
  'Checkout',
  'OrderSummary',
  'AdminDashboard'
];

const template = name => `<template>
  <div>
    <h1>${name} Page</h1>
  </div>
</template>

<script>
export default {
  name: '${name}'
};
</script>
`;

if (!fs.existsSync(viewsDir)) {
  fs.mkdirSync(viewsDir, { recursive: true });
}

components.forEach(name => {
  const filePath = path.join(viewsDir, `${name}.vue`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template(name), 'utf8');
    console.log(`✅ Created: ${name}.vue`);
  } else {
    console.log(`⚠️ Already exists: ${name}.vue`);
  }
});
