async function main(args: string[]) {
  console.log(`👉 process.env.NODE_ENV = `, process.env.NODE_ENV);
  console.log(`❌  TADAA  = `, process.env.AUTH_TOKEN);
  console.log(`👉 Runing script: `, args[0]);
  console.log(`👉 With arguments: `, args.slice(2).join(","));
}

main(process.argv);
