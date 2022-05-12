# Yo Norgate-AV - Project Generator

[![Build Status](https://github.com/Norgate-AV-Solutions-Ltd/generator-norgate-av/actions/workflows/main.yml/badge.svg)](https://github.com/Norgate-AV-Solutions-Ltd/generator-norgate-av/actions)

A Yeoman generator to bootstrap various projects 🚀🚀🚀

## Install the Generator

Install Yeoman and the VS Code Extension generator:

```bash
npm install -g yo generator-norgate-av

# or

yarn global add yo generator-norgate-av
```

## Run Yo Norgate-AV
The Yeoman generator will walk you through the steps required to create your project prompting for the required information.

To launch the generator simply type:

```bash
yo norgate-av
```

## Generator Output

These templates will
* Create a base folder structure
* Template out a rough `package.json`

## Command line

```
Usage:
  yo norgate-av [<destination>] [options]
Argument (optional):
  The destination to create the project in, absolute or relative to the current working
  directory. Use '.' for the current folder.
  If not provided, defaults to a folder in the current working directory with the project
  display name.
Options:
  -h,   --help                  # Print the generator's options and usage
  -y,   --yes                   # Quick mode, skip all optional prompts and use defaults
  -o,   --open                  # Open the generated project in Visual Studio Code
  -t,   --projectType           # ts, js...
        --projectId             # Id of the project
        --projectDescription    # Description of the project
  -p,   --pkg                   # 'npm' or 'yarn'
  -g,   --git                   # Initialize a git repo
Example usages:
  yo norgate-av                       # Create an project in a folder with the projects's name.
  yo norgate-av . -o                  # Create an project in current folder and open with Visual Studio Code.
  yo norgate-av cowbell -t ts -y      # Create an TypeScript project in './cowbell', skip prompts, use defaults.
  yo norgate-av dopephish -t js -g    # Create an JavaScript project in './dopephish', initialize a git repository.
```

## License

[MIT](LICENSE)
