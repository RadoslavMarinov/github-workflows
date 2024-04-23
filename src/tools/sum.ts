async function main(args: string[]) {
  console.log(`👉 process.env.NODE_ENV = `, process.env.NODE_ENV);
  console.log(`❌  SECRET  = `, process.env.MY_SECRET);
  console.log(`👉 Runing script: `, args[0]);
  console.log(`👉 With arguments: `, args.slice(2).join(","));
}

main(process.argv);
