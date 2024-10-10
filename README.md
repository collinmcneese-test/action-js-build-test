# 🧪 Build and Test Code GitHub Action

This GitHub Action builds and tests JavaScript projects using specified Node.js versions and package managers.

## Inputs

| Name               | Description                          | Required | Default |
|--------------------|--------------------------------------|----------|---------|
| `build`            | Whether to build the project         | false    | `true`  |
| `test`             | Whether to test the project          | false    | `true`  |
| `package_manager`  | The package manager to use           | false    | `npm`   |
| `node_version`     | The Node.js version to validate      | false    | `18.x`  |
| `working_directory`| The working directory to use         | false    | `.`     |

## Usage

```yaml
name: CI
on:
  pull_request:
    branches:
      - main
    paths:
      - './action.yml'
      - './test/**'
      - '.github/workflows/ci.yml'
jobs:
  test-action:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]
        package-manager: [npm, yarn]
    steps:
      - uses: actions/checkout@v4
      - uses: ./
        with:
          build: 'true'
          test: 'true'
          package_manager: ${{ matrix.package-manager }}
          node_version: ${{ matrix.node-version }}
          working_directory: './test'
```
