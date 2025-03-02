import { ConfigFile } from "@/types/config-file";
import { Command } from "commander";
import * as fs from "fs";
import * as path from "path";

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
      const sourceFilePath = path.resolve(
        __dirname + "/../../assets/atelerix.jsonc"
      );
      fs.copyFileSync(sourceFilePath, configFilePath);
      const relativePath = path.relative(process.cwd(), configFilePath);

      console.log(`Created config file at ${relativePath}`);

      // parse the config file to ensure it's valid
      const timestampDiff = Date.now() - timestamp;
      console.log(`Config file initialized in ${timestampDiff}ms.`);
    });
}
