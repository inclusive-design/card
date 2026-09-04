import { defineConfig } from 'eslint/config';
import eslintConfigInclusiveDesign from '@inclusive-design/eslint-config';

export default defineConfig([
	{
		extends: [eslintConfigInclusiveDesign],
		files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
		rules: {
			'new-cap': ['error', { capIsNewExceptionPattern: '^Elena' }],
			'no-constant-binary-expression': 'off',
			'unicorn/no-top-level-side-effects': 'off',
			'jsdoc/check-tag-names': ['error', {
				definedTags: [
					'displayName',
					'status',
					'cssprop',
				],
			}],
		},
	},
	{
		ignores: ['dist/**', 'README.md'],
	},
]);
