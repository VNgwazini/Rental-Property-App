import Autosuggest from "react-autosuggest";
import { useState, useEffect, useContext } from "react";

export default function AutoSuggest() {
  const [suggestions, setSuggestions] = useState(null);

  const properties = [
    {
      name: "Robel Group",
      street_address: "0929 Westerfield Court",
      email: "umusprat0@icio.us",
      city: "Conroe",
      state: "TX",
      zip: "77305",
      phone: "936-845-5796",
      fax: "405-914-3281",
      url:
        "http://google.co.uk/faucibus.xml?erat=in&fermentum=felis&justo=eu&nec=sapien&condimentum=cursus&neque=vestibulum&sapien=proin&placerat=eu&ante=mi&nulla=nulla&justo=ac&aliquam=enim&quis=in&turpis=tempor",
      office_hours: "6:50 AM",
      lease_term_min: 3,
    },
    {
      name: "Goodwin Inc",
      street_address: "93 5th Terrace",
      email: "gscohier1@sitemeter.com",
      city: "Katy",
      state: "TX",
      zip: "77493",
      phone: "281-459-5244",
      fax: "304-704-8801",
      url:
        "http://slideshare.net/felis/sed.png?proin=rutrum&risus=nulla&praesent=nunc&lectus=purus&vestibulum=phasellus&quam=in&sapien=felis&varius=donec&ut=semper&blandit=sapien&non=a&interdum=libero&in=nam&ante=dui&vestibulum=proin&ante=leo&ipsum=odio&primis=porttitor&in=id&faucibus=consequat&orci=in&luctus=consequat&et=ut&ultrices=nulla&posuere=sed&cubilia=accumsan&curae=felis&duis=ut&faucibus=at&accumsan=dolor&odio=quis&curabitur=odio&convallis=consequat&duis=varius&consequat=integer&dui=ac",
      office_hours: "6:09 AM",
      lease_term_min: 7,
    },
    {
      name: "Cole LLC",
      street_address: "0990 Kennedy Trail",
      email: "apitrollo2@tuttocitta.it",
      city: "Amarillo",
      state: "TX",
      zip: "79105",
      phone: "806-905-2335",
      fax: "312-374-2217",
      url:
        "http://yellowpages.com/felis/fusce/posuere/felis/sed/lacus.png?non=odio&ligula=curabitur&pellentesque=convallis&ultrices=duis&phasellus=consequat&id=dui&sapien=nec&in=nisi&sapien=volutpat&iaculis=eleifend&congue=donec&vivamus=ut&metus=dolor&arcu=morbi&adipiscing=vel&molestie=lectus&hendrerit=in&at=quam&vulputate=fringilla&vitae=rhoncus&nisl=mauris&aenean=enim&lectus=leo&pellentesque=rhoncus&eget=sed&nunc=vestibulum&donec=sit&quis=amet&orci=cursus&eget=id&orci=turpis&vehicula=integer&condimentum=aliquet&curabitur=massa&in=id&libero=lobortis&ut=convallis&massa=tortor&volutpat=risus&convallis=dapibus&morbi=augue&odio=vel&odio=accumsan&elementum=tellus&eu=nisi",
      office_hours: "7:54 AM",
      lease_term_min: 11,
    },
    {
      name: "Herman Group",
      street_address: "1977 Michigan Place",
      email: "mjeness3@mashable.com",
      city: "El Paso",
      state: "TX",
      zip: "88584",
      phone: "915-136-5858",
      fax: "251-968-0668",
      url:
        "https://gmpg.org/integer/pede.aspx?velit=vel&vivamus=accumsan&vel=tellus&nulla=nisi&eget=eu&eros=orci&elementum=mauris&pellentesque=lacinia&quisque=sapien&porta=quis&volutpat=libero&erat=nullam&quisque=sit&erat=amet&eros=turpis&viverra=elementum&eget=ligula&congue=vehicula&eget=consequat&semper=morbi&rutrum=a&nulla=ipsum&nunc=integer&purus=a&phasellus=nibh&in=in&felis=quis",
      office_hours: "6:32 AM",
      lease_term_min: 12,
    },
    {
      name: "Stanton Inc",
      street_address: "1 Lillian Parkway",
      email: "pleveritt4@wikia.com",
      city: "Denton",
      state: "TX",
      zip: "76210",
      phone: "817-118-6227",
      fax: "405-960-7203",
      url:
        "http://twitpic.com/neque/aenean.js?orci=metus&nullam=aenean&molestie=fermentum&nibh=donec&in=ut&lectus=mauris&pellentesque=eget&at=massa&nulla=tempor&suspendisse=convallis&potenti=nulla&cras=neque&in=libero&purus=convallis&eu=eget&magna=eleifend&vulputate=luctus&luctus=ultricies&cum=eu&sociis=nibh&natoque=quisque&penatibus=id&et=justo&magnis=sit&dis=amet&parturient=sapien&montes=dignissim&nascetur=vestibulum&ridiculus=vestibulum&mus=ante&vivamus=ipsum&vestibulum=primis&sagittis=in&sapien=faucibus&cum=orci&sociis=luctus&natoque=et&penatibus=ultrices&et=posuere&magnis=cubilia&dis=curae&parturient=nulla&montes=dapibus&nascetur=dolor&ridiculus=vel&mus=est&etiam=donec&vel=odio&augue=justo&vestibulum=sollicitudin&rutrum=ut&rutrum=suscipit&neque=a&aenean=feugiat&auctor=et&gravida=eros&sem=vestibulum&praesent=ac&id=est&massa=lacinia&id=nisi&nisl=venenatis&venenatis=tristique&lacinia=fusce&aenean=congue&sit=diam&amet=id&justo=ornare&morbi=imperdiet&ut=sapien&odio=urna&cras=pretium&mi=nisl&pede=ut",
      office_hours: "6:56 AM",
      lease_term_min: 4,
    },
    {
      name: "Mills Group",
      street_address: "0642 Atwood Circle",
      email: "aaldwich5@people.com.cn",
      city: "Lubbock",
      state: "TX",
      zip: "79491",
      phone: "806-792-2667",
      fax: "501-836-8214",
      url:
        "https://ucsd.edu/proin/leo.aspx?nonummy=dis&integer=parturient&non=montes&velit=nascetur&donec=ridiculus&diam=mus&neque=vivamus&vestibulum=vestibulum&eget=sagittis&vulputate=sapien&ut=cum&ultrices=sociis&vel=natoque&augue=penatibus&vestibulum=et&ante=magnis&ipsum=dis&primis=parturient&in=montes&faucibus=nascetur&orci=ridiculus&luctus=mus&et=etiam&ultrices=vel&posuere=augue&cubilia=vestibulum&curae=rutrum&donec=rutrum&pharetra=neque&magna=aenean&vestibulum=auctor&aliquet=gravida&ultrices=sem&erat=praesent&tortor=id&sollicitudin=massa&mi=id&sit=nisl&amet=venenatis&lobortis=lacinia&sapien=aenean&sapien=sit&non=amet&mi=justo&integer=morbi&ac=ut&neque=odio&duis=cras&bibendum=mi&morbi=pede&non=malesuada&quam=in&nec=imperdiet&dui=et&luctus=commodo&rutrum=vulputate&nulla=justo&tellus=in&in=blandit&sagittis=ultrices&dui=enim",
      office_hours: "6:45 AM",
      lease_term_min: 12,
    },
    {
      name: "Waters, Crona and Schroeder",
      street_address: "01 Novick Avenue",
      email: "ckerford6@google.pl",
      city: "Austin",
      state: "TX",
      zip: "78732",
      phone: "512-410-6250",
      fax: "319-310-7278",
      url:
        "http://walmart.com/nonummy/maecenas/tincidunt.html?felis=suscipit&ut=nulla&at=elit&dolor=ac&quis=nulla&odio=sed&consequat=vel&varius=enim&integer=sit&ac=amet&leo=nunc&pellentesque=viverra&ultrices=dapibus&mattis=nulla&odio=suscipit&donec=ligula&vitae=in&nisi=lacus&nam=curabitur&ultrices=at&libero=ipsum&non=ac&mattis=tellus&pulvinar=semper&nulla=interdum&pede=mauris&ullamcorper=ullamcorper&augue=purus&a=sit&suscipit=amet",
      office_hours: "7:07 AM",
      lease_term_min: 8,
    },
    {
      name: "Corwin, Nikolaus and Nienow",
      street_address: "372 Dawn Crossing",
      email: "tpfertner7@a8.net",
      city: "El Paso",
      state: "TX",
      zip: "79999",
      phone: "915-978-0655",
      fax: "234-873-8814",
      url:
        "http://dion.ne.jp/amet.json?ultrices=nunc&mattis=nisl&odio=duis&donec=bibendum&vitae=felis",
      office_hours: "6:00 AM",
      lease_term_min: 5,
    },
    {
      name: "Pfannerstill-Christiansen",
      street_address: "06105 Waubesa Drive",
      email: "ldesouza8@hhs.gov",
      city: "Austin",
      state: "TX",
      zip: "78726",
      phone: "512-443-2715",
      fax: "716-557-7547",
      url:
        "http://freewebs.com/pede.jpg?urna=cubilia&pretium=curae&nisl=nulla&ut=dapibus&volutpat=dolor&sapien=vel&arcu=est&sed=donec&augue=odio&aliquam=justo&erat=sollicitudin&volutpat=ut&in=suscipit&congue=a&etiam=feugiat&justo=et",
      office_hours: "6:22 AM",
      lease_term_min: 4,
    },
    {
      name: "Jenkins Group",
      street_address: "1 Russell Court",
      email: "jyakunchikov9@stumbleupon.com",
      city: "Odessa",
      state: "TX",
      zip: "79764",
      phone: "432-867-6788",
      fax: "757-120-5115",
      url:
        "http://cnbc.com/mi/pede/malesuada/in/imperdiet/et/commodo.aspx?semper=in&rutrum=sapien&nulla=iaculis&nunc=congue&purus=vivamus&phasellus=metus&in=arcu&felis=adipiscing&donec=molestie&semper=hendrerit&sapien=at&a=vulputate&libero=vitae&nam=nisl&dui=aenean&proin=lectus&leo=pellentesque&odio=eget&porttitor=nunc&id=donec&consequat=quis&in=orci&consequat=eget&ut=orci&nulla=vehicula&sed=condimentum&accumsan=curabitur&felis=in&ut=libero&at=ut&dolor=massa&quis=volutpat&odio=convallis&consequat=morbi&varius=odio&integer=odio&ac=elementum&leo=eu&pellentesque=interdum&ultrices=eu&mattis=tincidunt&odio=in&donec=leo&vitae=maecenas&nisi=pulvinar&nam=lobortis",
      office_hours: "6:02 AM",
      lease_term_min: 6,
    },
    {
      name: "Veum-Hand",
      street_address: "813 Troy Court",
      email: "mblicka@myspace.com",
      city: "Galveston",
      state: "TX",
      zip: "77554",
      phone: "281-733-1599",
      fax: "936-605-2544",
      url:
        "http://wikipedia.org/tristique.js?a=lobortis&pede=ligula&posuere=sit&nonummy=amet&integer=eleifend&non=pede&velit=libero&donec=quis&diam=orci&neque=nullam&vestibulum=molestie&eget=nibh&vulputate=in&ut=lectus&ultrices=pellentesque&vel=at&augue=nulla&vestibulum=suspendisse&ante=potenti&ipsum=cras&primis=in&in=purus&faucibus=eu&orci=magna&luctus=vulputate&et=luctus&ultrices=cum&posuere=sociis&cubilia=natoque&curae=penatibus&donec=et&pharetra=magnis&magna=dis&vestibulum=parturient&aliquet=montes&ultrices=nascetur&erat=ridiculus&tortor=mus&sollicitudin=vivamus&mi=vestibulum&sit=sagittis&amet=sapien&lobortis=cum&sapien=sociis&sapien=natoque&non=penatibus&mi=et",
      office_hours: "6:55 AM",
      lease_term_min: 3,
    },
    {
      name: "Sanford Inc",
      street_address: "41 Sage Alley",
      email: "poxerb@t.co",
      city: "El Paso",
      state: "TX",
      zip: "79968",
      phone: "915-566-4795",
      fax: "309-878-7477",
      url:
        "http://cornell.edu/vestibulum/sed/magna/at/nunc/commodo.js?aliquam=erat&lacus=id&morbi=mauris&quis=vulputate&tortor=elementum&id=nullam&nulla=varius&ultrices=nulla&aliquet=facilisi&maecenas=cras&leo=non&odio=velit&condimentum=nec&id=nisi&luctus=vulputate&nec=nonummy&molestie=maecenas&sed=tincidunt&justo=lacus&pellentesque=at&viverra=velit&pede=vivamus&ac=vel&diam=nulla&cras=eget&pellentesque=eros&volutpat=elementum&dui=pellentesque&maecenas=quisque&tristique=porta&est=volutpat&et=erat&tempus=quisque&semper=erat&est=eros&quam=viverra&pharetra=eget&magna=congue&ac=eget&consequat=semper&metus=rutrum&sapien=nulla&ut=nunc&nunc=purus&vestibulum=phasellus&ante=in&ipsum=felis&primis=donec",
      office_hours: "7:21 AM",
      lease_term_min: 11,
    },
    {
      name: "Bashirian-Collins",
      street_address: "083 Marcy Circle",
      email: "cneachellc@nhs.uk",
      city: "Dallas",
      state: "TX",
      zip: "75367",
      phone: "214-895-8311",
      fax: "253-601-6011",
      url:
        "http://posterous.com/at/velit/eu/est.html?risus=morbi&semper=non&porta=lectus&volutpat=aliquam&quam=sit&pede=amet&lobortis=diam&ligula=in&sit=magna&amet=bibendum&eleifend=imperdiet&pede=nullam&libero=orci&quis=pede&orci=venenatis&nullam=non&molestie=sodales&nibh=sed&in=tincidunt&lectus=eu&pellentesque=felis&at=fusce&nulla=posuere&suspendisse=felis&potenti=sed&cras=lacus&in=morbi&purus=sem&eu=mauris&magna=laoreet&vulputate=ut&luctus=rhoncus&cum=aliquet&sociis=pulvinar&natoque=sed&penatibus=nisl&et=nunc&magnis=rhoncus&dis=dui&parturient=vel&montes=sem&nascetur=sed&ridiculus=sagittis&mus=nam&vivamus=congue&vestibulum=risus&sagittis=semper&sapien=porta&cum=volutpat&sociis=quam&natoque=pede&penatibus=lobortis&et=ligula&magnis=sit&dis=amet&parturient=eleifend&montes=pede&nascetur=libero&ridiculus=quis&mus=orci&etiam=nullam&vel=molestie&augue=nibh&vestibulum=in&rutrum=lectus&rutrum=pellentesque&neque=at&aenean=nulla&auctor=suspendisse",
      office_hours: "6:47 AM",
      lease_term_min: 9,
    },
    {
      name: "Cummerata Group",
      street_address: "6 4th Crossing",
      email: "bmcvittied@cnet.com",
      city: "Beaumont",
      state: "TX",
      zip: "77705",
      phone: "409-863-9733",
      fax: "304-149-5736",
      url:
        "https://ucoz.com/rhoncus.html?morbi=odio&vel=porttitor&lectus=id&in=consequat&quam=in&fringilla=consequat&rhoncus=ut&mauris=nulla&enim=sed&leo=accumsan&rhoncus=felis&sed=ut&vestibulum=at&sit=dolor&amet=quis&cursus=odio&id=consequat&turpis=varius&integer=integer&aliquet=ac&massa=leo&id=pellentesque&lobortis=ultrices&convallis=mattis&tortor=odio&risus=donec&dapibus=vitae&augue=nisi&vel=nam&accumsan=ultrices&tellus=libero&nisi=non&eu=mattis&orci=pulvinar&mauris=nulla&lacinia=pede&sapien=ullamcorper&quis=augue&libero=a&nullam=suscipit&sit=nulla&amet=elit&turpis=ac&elementum=nulla&ligula=sed&vehicula=vel&consequat=enim&morbi=sit&a=amet&ipsum=nunc&integer=viverra&a=dapibus&nibh=nulla&in=suscipit&quis=ligula&justo=in&maecenas=lacus&rhoncus=curabitur&aliquam=at&lacus=ipsum&morbi=ac&quis=tellus&tortor=semper&id=interdum&nulla=mauris&ultrices=ullamcorper&aliquet=purus&maecenas=sit&leo=amet&odio=nulla&condimentum=quisque&id=arcu&luctus=libero&nec=rutrum&molestie=ac&sed=lobortis&justo=vel&pellentesque=dapibus&viverra=at&pede=diam",
      office_hours: "6:39 AM",
      lease_term_min: 9,
    },
  ];

  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === "") {
      return [];
    }

    const regex = new RegExp("^" + escapedValue, "i");

    return properties.filter((language) => regex.test(language.street_address));
  }

  function getSuggestionValue(suggestion) {
    return suggestion.street_address;
  }

  function renderSuggestion(suggestion) {
    return <span>{suggestion.street_address}</span>;
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };
  const [inputProps, setInputProps] = useState({
    placeholder: "Type 'c'",
    value,
    onChange: this.onChange,
  });

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
      onSuggestionsClearRequested={this.onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
}
