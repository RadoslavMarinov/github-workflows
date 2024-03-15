async function main(args: string[]) {
  console.log(`👉 Runing script: `, args[0]);
  console.log(`👉 With arguments: `, args.slice(2).join(","));
}

main(process.argv);
