import css from '@eslint/css'
import js from '@eslint/js'
import json from '@eslint/json'
import markdown from '@eslint/markdown'
import prettier from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import solid from 'eslint-plugin-solid'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
    globalIgnores(['.vite/*', 'dist/*', 'public/mockServiceWorker.js']),
    {
        extends: [
            'js/recommended',
            'tseslint/recommendedTypeChecked',
            'tseslint/stylisticTypeChecked',
        ],
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        // @ts-expect-error tseslint
        plugins: { js, perfectionist, solid, tseslint, unicorn },
        rules: {
            ...perfectionist.configs['recommended-natural'].rules,
            ...unicorn.configs.recommended.rules,
            ...solid.configs.recommended.rules,
        },
    },
    {
        extends: ['css/recommended'],
        files: ['**/*.css'],
        language: 'css/css',
        plugins: { css },
    },
    {
        extends: ['json/recommended'],
        files: ['**/*.json'],
        language: 'json/json',
        plugins: { json },
    },
    {
        extends: ['markdown/recommended'],
        files: ['**/*.md'],
        language: 'markdown/commonmark',
        plugins: { markdown },
    },
    prettier,
])
