interface LinkRequest {
  destination: string;
  domain: {
    fullName: string;
  };
}

let endpoint: string = 'https://api.rebrandly.com/v1/links';
let rebrandlyApi: string = process.env.REBRANDLY_API ? process.env.REBRANDLY_API : '';

let headers: HeadersInit = {
  'Content-Type': 'application/json',
  apikey: rebrandlyApi,
};

export async function GET() {
  let apiResponse = await fetch(endpoint, {
    method: 'GET',
    headers: headers,
  });

  const links = await apiResponse.json();
  return Response.json({
    statusCode: 200,
    message: 'Success get links',
    data: links,
  });
}

export async function POST(request: Request) {
  const response = await request.json();
  const url: string = response.link;

  if (!url) {
    return Response.json(
      {
        statusCode: 400,
        code: 'Input invalid',
        message: 'Please add a link',
      },
      {
        status: 400,
      }
    );
  }

  let linkRequest: LinkRequest = {
    destination: url,
    domain: { fullName: 'rebrand.ly' },
    //, slashtag: "A_NEW_SLASHTAG"
    //, title: "Rebrandly YouTube channel"
  };

  let apiResponse = await fetch(endpoint, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(linkRequest),
  });

  let links = await apiResponse.json();

  return Response.json({
    statusCode: 201,
    message: 'Success short link',
    data: links,
  });
}
