import { Command } from "commander";
import { setupInitCommand } from "./commands/init";

const program = new Command();

program
  .name("atelerix")
  .description("CLI for representing Posthog feature flags as code")
  .version("1.0.0");

// atelerix init
setupInitCommand(program);

// phac deploy
// program
//   .command("deploy")
//   .description("Deploy modules")
//   .option("-m, --module <modules...>", "Specify modules to deploy")
//   .option("-d, --destructive", "Enable destructive changes")
//   .action((options) => {
//     console.log("Deploying with options:");
//     if (options.module) {
//       console.log("Modules:", options.module.join(", "));
//     }
//     if (options.destructive) {
//       console.log("Destructive mode enabled");
//     }
//     // Add deployment logic here
//   });

// // phac pull
// program
//   .command("pull")
//   .description("Pull configuration")
//   .action(() => {
//     console.log("Pulling configuration...");
//     // Add pull logic here
//   });

program.parse(process.argv);
