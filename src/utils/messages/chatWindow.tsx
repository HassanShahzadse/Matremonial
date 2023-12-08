import React from "react";
import Image from "next/image";
import Woman from "/public/member3.png";

export const ChatWindow = () => {
  return (
    <>
      {/* <!-- Chat Window --> */}
      
   {/* Chat Area */}
      <div className="flex-1 flex flex-col xsm:hidden lg:block">
        {/* Chat Header */}
        <div className="p-3 bg-white border-b border-gray-300">
        <div className="right flex justify-between items-center">
          <div className="img-name flex ml-3 items-center space-x-3">
            <Image
              className="rounded"
              src={Woman}
              alt=""
              width={50}
              height={50}
            />
            <h3>Jasica</h3>
          </div>
          <div className="star shadow-md p-2">⭐</div>
        </div>
          {/* <div className="text-xl font-bold">Chat with User</div> */}
        </div>

  {/* <!-- Chat Messages --> */}
        <div className="flex-1 overflow-y-auto p-4 h-[80vh] bg-white">
        {/* <!-- User 1 Message --> */}
          <div className="flex mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-500">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
            <div className="ml-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">Hello, how are you?</p>
            </div>
          </div>
          {/* <!-- User 2 Message --> */}
      
          <div className="flex mb-4 justify-end">
            <div className="mr-3 bg-gray-200 p-3 rounded-lg">
              <p className="text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut animi facere quos quas eligendi, incidunt nam corporis beatae nemo minima illo totam nihil ullam! Similique omnis, laudantium, fugiat aperiam illo quo non, ipsum molestias eos tempore natus inventore veritatis vitae repudiandae possimus quod debitis! Sequi enim nisi esse itaque doloribus eaque maiores in sint sapiente obcaecati earum minus eius sed repellendus quae odit iusto, velit aut laboriosam eveniet ea commodi culpa consectetur. Odio dolores ex minus, repudiandae voluptatibus ipsum qui officiis praesentium aliquid modi libero optio explicabo quod nesciunt veniam voluptas eaque, maxime laborum quo facilis recusandae, quasi asperiores beatae. Obcaecati cupiditate fugit consectetur placeat sint? Eos voluptate impedit ipsam! Soluta explicabo sed ullam asperiores impedit repellendus magni laudantium accusantium cupiditate saepe id quis eos sunt fugit debitis qui possimus laboriosam rerum sapiente reprehenderit obcaecati, nisi sequi nihil. Qui quasi ab voluptatem sint! A iste, sit sunt commodi vel reiciendis laboriosam pariatur molestiae, voluptatum ratione ad dolorum labore repellat nostrum maxime porro dolore ullam, sed praesentium. Rerum tenetur eius quidem fugiat, dolor labore! Modi, cum eveniet facilis debitis molestias iure omnis, pariatur labore repellendus voluptatum iusto nemo reprehenderit necessitatibus nihil amet dignissimos. Doloremque dolorem odio perferendis, temporibus suscipit non. Praesentium quasi libero neque natus quaerat veritatis consequatur atque eveniet, in enim iure unde ducimus illo ipsam obcaecati culpa quo voluptates qui pariatur impedit nostrum similique voluptatum non. Nam voluptas impedit aspernatur, asperiores unde labore, dignissimos nostrum ducimus porro rem, reprehenderit atque nihil aut possimus totam similique fugit incidunt sit architecto quia. Illum libero dolorem quos ipsa cumque. Et ipsam assumenda eveniet veritatis quo? Itaque in fugit ad eius ratione obcaecati quasi quas maiores suscipit vel, libero consequuntur ea, nostrum voluptatum dolore facilis possimus iusto labore dolor earum atque! Nulla odio tenetur possimus numquam aspernatur eveniet autem corporis soluta quod vel quisquam rem nesciunt, dolorum mollitia repudiandae ipsum necessitatibus aperiam atque eaque architecto adipisci, cumque itaque. Sequi quam placeat, tempora sint ut praesentium et ipsam dicta illo molestiae accusamus similique enim harum, a eius deserunt dolorem modi asperiores optio iure possimus laboriosam magni amet ab. Beatae expedita debitis maxime sint molestiae architecto nihil delectus, fugiat asperiores eligendi assumenda eveniet laboriosam, earum itaque deleniti ipsum laborum vel esse doloribus, voluptatibus natus. Laudantium alias iste vitae amet. Mollitia, quibusdam temporibus, dolore voluptas natus odio veniam nisi cupiditate obcaecati ipsam id, earum atque quasi eum dolor. Excepturi praesentium odit, animi ab id repellendus. Earum quia quis aperiam est voluptatum illum eaque numquam incidunt? Nulla ipsum temporibus necessitatibus tempora doloribus eius amet autem cum, iure voluptatum repellendus error repudiandae aperiam fugiat veniam deserunt facere illum consectetur rem numquam sint voluptatem est quae. Mollitia ea voluptatum dolores deleniti vel molestiae modi nam eaque exercitationem similique magnam facilis voluptates ab velit, porro optio maxime a necessitatibus animi repellendus iure. Molestiae consequatur pariatur architecto delectus perferendis, cupiditate perspiciatis numquam labore dolorum tempora ea consectetur minima nobis est, nisi quis laboriosam asperiores tempore necessitatibus autem vitae nihil illo? Dolore nisi fugiat amet doloremque beatae dignissimos nesciunt a corrupti ea maxime. Nam, modi fugit distinctio amet dicta rem nostrum non eveniet tempora dolore maxime, inventore quia molestias fuga neque. Explicabo quibusdam, nam consectetur adipisci corrupti obcaecati sunt beatae exercitationem deserunt ex veritatis libero vero cumque soluta fuga reprehenderit provident, ipsa praesentium, impedit velit architecto voluptate facere sapiente excepturi. Ratione, modi vel. Impedit numquam fugit nobis reprehenderit? Iure quos perferendis quam eius, repellat autem. Veniam quisquam laudantium debitis voluptatibus et error dolore quia asperiores, tempore eum, corrupti perferendis magni? Ratione minus expedita ipsam vel quasi vitae commodi dolorem praesentium eum. Vitae atque sit laudantium magnam cumque harum. Nostrum maxime mollitia assumenda voluptates culpa debitis nobis magnam maiores quos inventore facilis, sequi sed dolor numquam earum, odit dolorem iste minima itaque hic. Accusamus cupiditate sapiente molestiae quasi ad veniam architecto placeat? Vel ratione reiciendis aliquam nostrum eveniet esse repudiandae minus hic? Doloribus officia nostrum ipsa eum recusandae fuga soluta blanditiis maxime culpa, quia sunt, autem temporibus, unde sit labore est repudiandae harum eius repellat fugit! Eligendi cupiditate quo praesentium atque nemo, magnam dolorum tenetur iure perspiciatis nobis, quibusdam laborum delectus consectetur ab vitae sunt alias autem dolorem deleniti eos. Magnam maxime iure quisquam, nostrum voluptatum similique excepturi modi? Fuga dignissimos cum nihil cupiditate vero architecto deleniti qui corporis impedit non! Unde placeat praesentium natus ratione officiis! Deleniti tempore vel impedit modi ipsum eum possimus voluptatibus accusantium nisi ullam laboriosam ducimus ipsam dicta animi magni sit autem omnis ex harum quaerat, aliquam iusto sint unde dolore. Eos ea magni quasi odio totam dolore, soluta laudantium sunt qui eius labore aliquam voluptas tempore minima ex nihil ab eveniet cumque pariatur iste autem! Soluta est magni labore saepe ipsum placeat deserunt velit laboriosam sint, porro temporibus non qui, facere quidem odit? Fugiat minus est facilis incidunt adipisci recusandae dicta eos! Ea laborum deserunt nisi vero. Eum, eos aperiam? Aliquid amet molestias deleniti temporibus officiis. Ratione, nobis dolorem doloribus ipsam suscipit eos rerum tempora tempore maiores veritatis enim, eveniet quod eum possimus, in quam? Ipsam saepe quisquam earum sint non autem officia accusamus ut quas soluta quis et in amet laboriosam aliquam quos eius, minus enim iste fugiat! Numquam odit excepturi nesciunt iusto, porro ullam blanditiis. Consequatur sequi earum expedita temporibus soluta maxime sint provident est asperiores corrupti necessitatibus, maiores harum, iure officia minima ratione alias a aliquam amet. Soluta eligendi quidem facilis assumenda totam, ex quasi aliquam nesciunt similique quis animi debitis autem pariatur ea, deleniti libero architecto qui! Veritatis quibusdam libero repudiandae, omnis dolore assumenda molestias harum commodi totam provident quia odio et laudantium eos consequatur nam aspernatur sint quas inventore nesciunt deleniti, ullam ipsam, accusantium quos! Facere temporibus tempora a nobis, cupiditate modi velit consequuntur animi magnam consectetur, eveniet nulla explicabo porro officiis illo facilis, qui iusto natus odio eum itaque voluptatem accusantium odit. Quod eius, illo blanditiis dolorem obcaecati nesciunt voluptatem repellendus, vel consequuntur qui explicabo incidunt itaque deserunt nostrum eaque eos sit! Minus aliquid delectus, voluptate dicta magnam vitae culpa distinctio adipisci aut, alias debitis, molestias quod explicabo illum harum consequatur!</p>
            </div>
            <div className="w-10 h-10">
              <Image src={Woman} alt="" className="rounded-full" />
            </div>
          </div>

        </div>

    <div className="p-4 bg-white ">
      <div className=" flex items-center ">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full p-2 border rounded focus:outline-none"
          />
          <button className="bg-[#fb1086] text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
        </div>
        {/* </div> */}

      </div>

    </>
  );
};
