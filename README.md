# Kubevious Rules Library

The **rules engine** is a way to extend [Kubevious](https://github.com/kubevious/kubevious) to support organizations needing additional rules beyond the built-in checks that come with Kubevious by default (such as label mismatch, missing port, misused or overused objects, etc.). The rules engine is an extension for Kubevious to allow programmable validation and best practices enforcement for configuration and state objects in Kubernetes. In addition to raising errors and warnings, the rules engine allows for the assigning of custom markers to identify items of particular interest. Examples are: publicly accessible applications, containers that use excessive resources, overprivileged containers, and many more.

This repository is a community driven library for common rules that can be used to make Kuberentes safer to use. For detailed documentation on writing custom rules can be found [here](https://github.com/kubevious/kubevious/blob/master/docs/rules-engine.md).

## Rules in this library
[//]: <> (BEGIN_RULES_DESCRIPTION)
[//]: <> (END_RULES_DESCRIPTION)


## Contributing
To submit your rules to the library follow the steps:
1. Find the right place for the rule under [rules/](rules/) directory.
2. Index the library using:
```sh
$ kubevious index-library .
```
3. Submit a pull request.

