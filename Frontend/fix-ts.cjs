const fs = require('fs');
const path = require('path');

const fixImport = (file, search, replace) => {
  const filepath = path.join(__dirname, file);
  if (fs.existsSync(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    content = content.replace(search, replace);
    fs.writeFileSync(filepath, content);
  }
}

fixImport('src/components/common/Button.tsx', "import { ReactNode, ButtonHTMLAttributes } from 'react';", "import type { ReactNode, ButtonHTMLAttributes } from 'react';");
fixImport('src/components/common/Card.tsx', "import { ReactNode, HTMLAttributes } from 'react';", "import type { ReactNode, HTMLAttributes } from 'react';");
fixImport('src/components/common/SectionHeader.tsx', "import { ReactNode } from 'react';", "import type { ReactNode } from 'react';");
fixImport('src/components/layout/Footer.tsx', "import React from 'react';\n", "");
fixImport('src/sections/SolutionsSection.tsx', "import Button from '../components/common/Button';\n", "");

console.log("Fixed TS errors");
