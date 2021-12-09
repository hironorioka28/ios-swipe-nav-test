import type {
  NextPage,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from "next";
import { useRouter } from "next/router";
import fetch from "node-fetch";
import NextLink from "next/link";
import Image from "next/image";

type Props = {
  url: string;
};

const Detail: NextPage<Props> = ({ url }) => {
  const router = useRouter();

  return (
    <>
      <h1>This page is {router.query.id}</h1>
      <Image
        src={url}
        alt={url}
        width={200}
        height={200}
        objectFit="cover"
        placeholder="blur"
        blurDataURL="https://via.placeholder.com/200x200.png"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        turpis mauris, molestie at aliquam non, congue eget enim. Morbi eget
        efficitur felis, a iaculis odio. Sed odio nisl, congue at malesuada id,
        cursus eget diam. Donec et ante at quam varius sodales. Phasellus in
        velit et urna dignissim consequat. Vivamus porttitor ipsum a eros
        ultricies faucibus. Morbi ut tempor lacus, non facilisis quam. Quisque
        libero massa, tincidunt at metus eget, malesuada ornare purus.
      </p>
      <p>
        Ut malesuada ante quis dui vestibulum, ac ultrices sapien pretium.
        Praesent turpis ex, accumsan eget dolor sed, sollicitudin feugiat risus.
        Nulla ultrices non tortor eget varius. Curabitur eu odio justo. In mi
        ipsum, viverra vitae justo vel, vestibulum blandit massa. Donec non
        lobortis orci, at aliquam sem. Morbi diam purus, venenatis sit amet
        congue non, bibendum nec dolor. Maecenas sed maximus tellus.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        consectetur neque vitae imperdiet gravida. Maecenas vitae nisi vel lacus
        bibendum viverra sed id enim. Proin ut pulvinar purus. Vivamus quam
        tellus, auctor in orci cursus, ultrices facilisis nibh. Ut a
        pellentesque lacus. Ut eleifend felis non pellentesque iaculis. Aenean
        congue ligula nec tincidunt pellentesque. Donec elementum at felis non
        blandit. Nullam accumsan sodales tempor. Maecenas consequat dolor a
        justo scelerisque sollicitudin. Integer id odio eros.
      </p>
      <p>
        Fusce odio tellus, sagittis sed ex facilisis, bibendum sollicitudin
        ligula. Nunc viverra sit amet nisl eu sagittis. Pellentesque tincidunt
        dui in odio varius condimentum. Quisque lacinia lorem sit amet facilisis
        ultricies. Quisque dui lacus, convallis eget sapien sed, iaculis
        pellentesque neque. Nam vehicula, sem a tempor sagittis, orci mi
        dignissim ante, quis sagittis arcu risus porta erat. Ut lacus eros,
        imperdiet ut nibh eu, viverra auctor risus.
      </p>
      <p>
        Vestibulum lobortis, velit et vulputate mattis, tellus urna dictum elit,
        vel faucibus metus urna quis eros. Vestibulum eget mattis leo, a ornare
        est. Proin commodo nec risus sed vulputate. Integer semper rhoncus
        tellus. Cras commodo justo euismod dapibus pretium. Nam non tellus nec
        velit lacinia gravida at eu nisi. Praesent nunc dui, efficitur sit amet
        tempus id, tempor id sem. Nunc convallis placerat vulputate. Nulla
        facilisi.
      </p>
      <p>
        Praesent vel quam pulvinar lorem aliquet rhoncus. Integer vitae
        fermentum odio, non commodo elit. Vivamus id sapien sed urna scelerisque
        commodo sit amet fermentum orci. Aliquam suscipit pellentesque dolor,
        eget lacinia est fringilla vel. Nunc vitae pulvinar turpis. Duis viverra
        magna nibh, a elementum nunc consectetur nec. Quisque placerat, magna
        vel malesuada placerat, neque nisi tincidunt lectus, sed bibendum nulla
        neque in purus. Suspendisse volutpat laoreet fringilla. Sed blandit
        molestie magna, id finibus mi ullamcorper vitae. Aliquam euismod
        sollicitudin justo, vitae egestas velit vehicula eu. Quisque luctus
        semper magna, at molestie lacus. Nullam et mi eget nisl ultrices
        tristique suscipit nec nunc. Morbi molestie mollis massa, in iaculis
        sapien accumsan ut. Cras cursus metus augue, ut cursus sapien convallis
        eget. Morbi at enim porttitor nulla ultrices dignissim. Duis dapibus
        mattis velit, ac dapibus odio pulvinar id.
      </p>
      <p>
        Duis suscipit felis eget purus vulputate fringilla. Donec non orci
        imperdiet, laoreet odio ullamcorper, mollis turpis. Proin hendrerit sit
        amet nisl quis sodales. In molestie in sem quis efficitur. Nam malesuada
        non est ac accumsan. Etiam id leo in libero sodales posuere at a tellus.
        Curabitur eu convallis neque.
      </p>
      <p>
        Suspendisse potenti. Donec pellentesque, enim non vulputate
        sollicitudin, velit ligula lacinia neque, sagittis sollicitudin nulla ex
        ut quam. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Etiam hendrerit placerat tempus. Aenean
        at turpis orci. Vivamus rutrum orci vitae augue finibus, ac sodales
        tellus convallis. Sed porttitor odio elementum lectus aliquam tincidunt.
        Donec ut fermentum dolor. Sed imperdiet magna in mauris pulvinar, nec
        pulvinar ex porta. Fusce sodales, metus id condimentum maximus, justo
        velit sodales nibh, non lacinia libero justo vitae risus.
      </p>
      <p>
        Vivamus nunc lectus, scelerisque sed orci in, blandit posuere lacus.
        Pellentesque cursus felis ac neque lacinia, a lobortis diam accumsan.
        Vestibulum eget mollis nisl. Aenean et neque viverra, interdum ex eu,
        lobortis nisl. Proin viverra, augue vitae iaculis suscipit, magna nibh
        pharetra arcu, vel vestibulum mauris ipsum quis leo. Vestibulum dolor
        mi, accumsan a sem convallis, vestibulum dignissim nisi. In tristique
        erat et rhoncus consectetur. Curabitur aliquam, turpis non euismod
        luctus, dui quam bibendum dui, id molestie leo sem vel turpis. Integer
        eget lacus laoreet, lobortis magna sed, sollicitudin sem. Nulla vel
        suscipit dui, vel efficitur nisl. Proin arcu mauris, consectetur ac
        justo non, tempor consequat erat. Praesent sagittis, orci tristique
        gravida lacinia, augue dolor venenatis turpis, vel ultrices elit quam
        non velit. Vestibulum mi urna, dapibus quis ante sed, malesuada tempor
        odio.
      </p>
      <p>
        Sed vitae sapien tempus, eleifend orci eget, consectetur leo. Ut et
        lorem a elit vehicula feugiat. Vestibulum et tincidunt urna, et finibus
        ante. Nunc finibus orci sit amet metus egestas feugiat. Praesent lacus
        nisi, suscipit eu posuere a, tempor vel risus. Nullam et volutpat justo,
        sit amet consequat nunc. Aenean vestibulum libero quis tortor
        ullamcorper placerat. Nulla tempus, mi in egestas consectetur, purus
        magna aliquet ipsum, id rhoncus neque nulla quis tellus. Mauris tortor
        neque, sollicitudin sed dictum id, porttitor a massa. Pellentesque
        eleifend nisi et quam bibendum rhoncus.
      </p>
      <p>
        Pellentesque feugiat pharetra mollis. Proin eget efficitur libero.
        Maecenas volutpat varius lorem eget sagittis. Donec a mollis enim,
        aliquet sollicitudin augue. Quisque auctor risus quis elit commodo
        molestie. Vestibulum aliquet consequat orci. Pellentesque non elit nec
        velit tristique pellentesque. Nullam accumsan ligula diam. Duis tempor
        nulla et eros rhoncus auctor. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Fusce eleifend diam vel
        bibendum ullamcorper. Nam odio justo, pharetra ac dictum eget, convallis
        nec massa. Sed vel tristique nisl. Nam vitae odio quis nunc sagittis
        venenatis. Nam tempus luctus purus non hendrerit. Duis ligula elit,
        auctor id tempus tincidunt, lobortis in dui.
      </p>
      <p>
        Mauris sollicitudin sem urna, nec ullamcorper mauris malesuada non.
        Quisque mattis imperdiet ante, sit amet sagittis risus accumsan sed.
        Suspendisse ac dui velit. Pellentesque at risus sem. Maecenas
        pellentesque et nibh quis ultrices. Nunc ornare pharetra massa vel
        fermentum. Morbi magna risus, consectetur et metus gravida, vulputate
        egestas ligula.
      </p>
      <p>
        Fusce sit amet leo rhoncus, ornare tellus at, ornare felis. Curabitur
        vulputate luctus pharetra. Quisque ultricies non ante dignissim sodales.
        Integer scelerisque urna nisl, in tempus est ultrices ut. Duis eu risus
        id tortor cursus blandit. Proin dolor purus, molestie non felis vel,
        elementum ornare ex. Aliquam nibh eros, tempor et semper sed, semper sed
        lectus. Aenean purus eros, hendrerit ut luctus sed, blandit eget turpis.
        Ut massa mi, consequat fringilla fermentum a, placerat at sem. Fusce in
        bibendum nunc. Nunc dapibus lectus nec nulla ultrices eleifend. Aenean
        vehicula diam tortor, at mollis diam molestie sed.
      </p>
      <p>
        Ut vulputate auctor dolor nec maximus. Suspendisse ipsum nibh, tempor
        maximus mi eget, faucibus tincidunt velit. Pellentesque vitae nibh in
        urna finibus condimentum. In pretium, nunc vel convallis venenatis,
        sapien tellus ultrices justo, id luctus leo purus quis mauris.
        Suspendisse dictum nulla tincidunt nibh efficitur tempor. Fusce
        pellentesque sapien magna, in consectetur lectus finibus in. Nunc id
        elementum tellus. Nam eu mattis tellus, id dignissim justo. Aenean
        ornare, libero non dapibus hendrerit, tellus ante pharetra erat, sed
        faucibus nisl diam at diam. Suspendisse ornare mollis lorem eu
        consequat. Mauris rhoncus velit odio, in sodales dui ultricies in. Fusce
        eget turpis auctor, egestas purus quis, placerat sem. Maecenas at ligula
        risus. Etiam a rhoncus eros.
      </p>
      <p>
        Nullam ac mauris sapien. Donec vel turpis ex. Nunc ullamcorper, neque
        sit amet sollicitudin interdum, nulla lectus dignissim ligula, in
        eleifend tellus lorem in dui. Etiam rutrum nunc a aliquam congue.
        Pellentesque tincidunt enim in risus imperdiet ultrices. Ut porta
        placerat mauris, sed ultrices eros rutrum eu. Sed consequat urna at dui
        venenatis, ut aliquam mi varius. Ut dictum consectetur ante eu
        facilisis. Etiam pretium eros ac justo scelerisque, quis aliquet risus
        hendrerit. Nulla facilisi. Nulla leo tellus, fringilla a magna ut,
        pulvinar tempor neque. Proin egestas finibus urna vel interdum.
      </p>
      <p>
        Nam interdum diam vel urna porta, vitae gravida urna tempor. Vivamus et
        volutpat orci, sed accumsan sem. Duis imperdiet felis eros, eu
        sollicitudin ipsum tincidunt vulputate. Mauris varius mi eget mauris
        finibus, ut accumsan odio lacinia. Duis lacinia sodales turpis vel
        cursus. Suspendisse semper lorem ac justo pellentesque pellentesque.
        Nulla et augue nec augue imperdiet placerat. Duis eleifend metus
        pulvinar orci sodales faucibus. Donec et libero at lectus ornare laoreet
        iaculis in felis. Morbi commodo ligula sit amet ipsum finibus, at
        lobortis libero auctor. Nullam a orci ut lectus sagittis elementum quis
        nec eros. Etiam ut pretium ligula, a consequat mi. Morbi ultrices enim
        felis, vitae auctor eros facilisis non.
      </p>
      <p>
        Pellentesque sollicitudin bibendum hendrerit. Nulla quis lacus semper,
        faucibus libero eget, blandit odio. Etiam sed vehicula urna. Vestibulum
        porttitor euismod vestibulum. Nunc a iaculis arcu. Integer a iaculis ex.
        Maecenas a imperdiet lectus. Maecenas nisl leo, ullamcorper non orci a,
        dictum scelerisque lorem. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Praesent eu suscipit ipsum. Duis luctus nibh in dui
        feugiat pharetra. Proin dapibus vehicula tellus, id eleifend mauris
        consequat id. Quisque varius ullamcorper ante, placerat tempor ante
        pellentesque non.
      </p>
      <p>
        Donec sollicitudin odio nibh, dignissim aliquet est mollis a. Nulla
        facilisi. Sed turpis tortor, malesuada eget mattis et, iaculis nec nibh.
        Sed dapibus arcu eget posuere imperdiet. Vivamus placerat ex id risus
        hendrerit convallis. Donec malesuada eget lectus ac iaculis. Proin
        condimentum arcu at egestas vulputate. Vestibulum facilisis leo lorem,
        vitae pulvinar turpis rutrum posuere. Suspendisse est nunc, venenatis et
        quam rutrum, bibendum dignissim leo. Fusce eu semper nisl. Curabitur
        sodales velit sit amet consectetur pretium. Aenean at laoreet dui, quis
        pretium urna. Nunc sit amet tincidunt tellus.
      </p>
      <p>
        Curabitur at tempor risus. Maecenas ac eros aliquam, aliquet libero vel,
        luctus libero. Nulla aliquet quis felis ut tempor. Nulla id metus
        auctor, congue mi et, feugiat magna. Morbi a orci lorem. Donec vel risus
        lectus. Sed et viverra sem. Pellentesque vel leo magna.
      </p>
      <p>
        Sed tincidunt turpis eget ligula ornare, in ultricies elit placerat. Sed
        auctor dolor ut sapien tempor ullamcorper. Cras nisi tortor, scelerisque
        non euismod eu, sollicitudin non ipsum. Integer ac tristique erat.
        Phasellus et magna finibus velit suscipit scelerisque. Phasellus
        venenatis gravida nulla sed auctor. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Phasellus elementum ligula ac ante
        tincidunt, ac tincidunt urna gravida. Mauris feugiat arcu vitae libero
        eleifend bibendum.
      </p>
      <NextLink href="/">
        <a>Home</a>
      </NextLink>
    </>
  );
};

export default Detail;

// export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
//   return {
//     paths: [], //indicates that no page needs be created at build time
//     fallback: "blocking", //indicates the type of fallback
//   };
// };

// export const getStaticProps: GetStaticProps = async () => {
//   // 外部のAPIエンドポイントを呼び出してpostsを取得します。
//   // 任意のデータ取得ライブラリを使用できます。
//   let json: any = {};
//   //const res = await fetch("https://aws.random.cat/meow");
//   //json = await res.json();
//   json.file = "https://purr.objects-us-east-1.dream.io/i/aVNQr.jpg";

//   // { props: posts } を返すことで、Blog コンポーネントは
//   // ビルド時に`posts`を prop として受け取ります。
//   return {
//     props: { url: json.file },
//   };
// };

export const getServerSideProps: GetServerSideProps = async () => {
  console.log("meow");

  let json: any = {};
  const res = await fetch("https://aws.random.cat/meow");
  json = await res.json();
  //json.file = "https://purr.objects-us-east-1.dream.io/i/aVNQr.jpg";

  return {
    props: { url: json.file },
  };
};
