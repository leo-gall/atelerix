import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";
import jsonc from "jsonc";
import { ConfigFile } from "@/types/config-file";

export function setupInitCommand(program: Command) {
  program
    .command("init")
    .option("-f, --force", "Overwrite existing config file")
    .option(
      "-d, --directory <directory>",
      "Specify directory to create config file in"
    )
    .description("Initialize a new atelerix config file")
    .action((options) => {
      console.log("Initializing atelerix config file...");

      const timestamp = Date.now();

      console.log("Preparing to create config file...");
      const configFilePath = path.resolve(
        process.cwd(),
        (options.directory ? options.directory + "/" : "./") + "atelerix.jsonc"
      );
      const existsConfigFile = fs.existsSync(configFilePath);
      if (existsConfigFile && !options.force) {
        console.error(
          `ERROR: Config file already exists at ${
            options.directory ? options.directory + "/" : "./"
          }atelerix.jsonc. Use --force to overwrite.`
        );
        return;
      }
      console.log("Creating config file...");

      fs.writeFileSync(configFilePath, getDefaultConfigJsonFile());
      const relativePath = path.relative(process.cwd(), configFilePath);

      console.log(`Initialized config file at ${relativePath}`);
    });
}

function getDefaultConfigJsonFile(): string {
  const DEFAULT_CONFIG: ConfigFile = {
    host: "env('POSTHOG_HOST')",
    apiKey: "env('POSTHOG_API_KEY')",
    flags: [
      {
        enabled: true,
        name: "feature-flag-example",
        description: "A sample feature flag",
        persistAcrossAuthSteps: true,
        payload: {
          type: "release-toggle",
          payload: {
            message: "Welcome to Posthog-as-Code!",
          },
          variants: [
            {
              key: "paying-users-only",
              rolloutPercentage: 100,
              payload: {
                message: "Thanks for being a paying user!",
              },
            },
          ],
        },
        releaseCondition: {
          matchBy: "users",
          variants: [
            {
              key: "user-type",
              operator: "equals",
              value: "premium",
            },
          ],
        },
      },
    ],
  };

  return JSON.stringify(DEFAULT_CONFIG, null, 2);
}
