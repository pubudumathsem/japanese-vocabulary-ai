// Add more vocabulary entries here. Keep the same property names.
const vocabulary = {
  "見積書": { hiragana: "みつもりしょ", english: "quotation; estimate document", sinhala: "මිල ගණන් ලේඛනය", type: "Noun", sentence: "見積書をお客様に送信しました。", sentenceHiragana: "みつもりしょを おきゃくさまに そうしんしました。", sentenceEnglish: "I sent the quotation to the customer.", sentenceSinhala: "මම මිල ගණන් ලේඛනය පාරිභෝගිකයාට යැව්වෙමි." },
  "確認": { hiragana: "かくにん", english: "confirmation; check", sinhala: "තහවුරු කිරීම / පරීක්ෂා කිරීම", type: "Noun / する verb", sentence: "内容をご確認ください。", sentenceHiragana: "ないようを ごかくにんください。", sentenceEnglish: "Please check the contents.", sentenceSinhala: "කරුණාකර අන්තර්ගතය පරීක්ෂා කරන්න." },
  "修正": { hiragana: "しゅうせい", english: "correction; modification", sinhala: "සංශෝධනය / නිවැරදි කිරීම", type: "Noun / する verb", sentence: "不具合を修正しました。", sentenceHiragana: "ふぐあいを しゅうせいしました。", sentenceEnglish: "I corrected the defect.", sentenceSinhala: "මම දෝෂය නිවැරදි කළෙමි." },
  "調査": { hiragana: "ちょうさ", english: "investigation; research", sinhala: "විමර්ශනය / සොයා බැලීම", type: "Noun / する verb", sentence: "問題の原因を調査しています。", sentenceHiragana: "もんだいの げんいんを ちょうさしています。", sentenceEnglish: "I am investigating the cause of the problem.", sentenceSinhala: "මම ගැටලුවේ හේතුව විමර්ශනය කරමින් සිටිමි." },
  "進捗": { hiragana: "しんちょく", english: "progress", sinhala: "ප්‍රගතිය", type: "Noun", sentence: "現在の進捗は七十パーセントです。", sentenceHiragana: "げんざいの しんちょくは ななじゅっパーセントです。", sentenceEnglish: "The current progress is 70 percent.", sentenceSinhala: "වර්තමාන ප්‍රගතිය සියයට 70 කි." },
  "完了": { hiragana: "かんりょう", english: "completion", sinhala: "සම්පූර්ණ කිරීම / අවසන් කිරීම", type: "Noun / する verb", sentence: "動作確認が完了しました。", sentenceHiragana: "どうさかくにんが かんりょうしました。", sentenceEnglish: "The functional check has been completed.", sentenceSinhala: "ක්‍රියාකාරී පරීක්ෂාව අවසන් කර ඇත." },
  "不具合": { hiragana: "ふぐあい", english: "defect; bug; malfunction", sinhala: "දෝෂය / ක්‍රියා විරහිත වීම", type: "Noun", sentence: "システムに不具合が発生しました。", sentenceHiragana: "システムに ふぐあいが はっせいしました。", sentenceEnglish: "A defect occurred in the system.", sentenceSinhala: "පද්ධතියේ දෝෂයක් ඇති විය." },
  "対応": { hiragana: "たいおう", english: "response; handling; support", sinhala: "ප්‍රතිචාර දැක්වීම / කටයුතු කිරීම", type: "Noun / する verb", sentence: "この問題に対応します。", sentenceHiragana: "この もんだいに たいおうします。", sentenceEnglish: "I will handle this problem.", sentenceSinhala: "මම මෙම ගැටලුව සම්බන්ධයෙන් කටයුතු කරන්නෙමි." },
  "開発機": { hiragana: "かいはつき", english: "development machine; development server", sinhala: "සංවර්ධන යන්ත්‍රය / සංවර්ධන සේවාදායකය", type: "Noun", sentence: "開発機へアップロードしました。", sentenceHiragana: "かいはつきへ アップロードしました。", sentenceEnglish: "I uploaded it to the development server.", sentenceSinhala: "මම එය සංවර්ධන සේවාදායකයට උඩුගත කළෙමි." },
  "動作確認": { hiragana: "どうさかくにん", english: "functional check; operation verification", sinhala: "ක්‍රියාකාරීත්වය පරීක්ෂා කිරීම", type: "Noun / する verb", sentence: "動作確認を実施しました。", sentenceHiragana: "どうさかくにんを じっししました。", sentenceEnglish: "I performed a functional check.", sentenceSinhala: "මම ක්‍රියාකාරීත්වය පරීක්ෂා කළෙමි." },
  "登録": { hiragana: "とうろく", english: "registration", sinhala: "ලියාපදිංචි කිරීම", type: "Noun / する verb", sentence: "新しいユーザーを登録しました。", sentenceHiragana: "あたらしい ユーザーを とうろくしました。", sentenceEnglish: "I registered a new user.", sentenceSinhala: "මම නව පරිශීලකයෙකු ලියාපදිංචි කළෙමි." },
  "更新": { hiragana: "こうしん", english: "update; renewal", sinhala: "යාවත්කාලීන කිරීම", type: "Noun / する verb", sentence: "データを更新しました。", sentenceHiragana: "データを こうしんしました。", sentenceEnglish: "I updated the data.", sentenceSinhala: "මම දත්ත යාවත්කාලීන කළෙමි." },
  "削除": { hiragana: "さくじょ", english: "deletion; removal", sinhala: "මකා දැමීම / ඉවත් කිරීම", type: "Noun / する verb", sentence: "不要なデータを削除しました。", sentenceHiragana: "ふような データを さくじょしました。", sentenceEnglish: "I deleted the unnecessary data.", sentenceSinhala: "මම අනවශ්‍ය දත්ත මකා දැමුවෙමි." },
  "表示": { hiragana: "ひょうじ", english: "display; indication", sinhala: "පෙන්වීම / දර්ශනය කිරීම", type: "Noun / する verb", sentence: "ログを画面に表示します。", sentenceHiragana: "ログを がめんに ひょうじします。", sentenceEnglish: "The log is displayed on the screen.", sentenceSinhala: "ලොග් තොරතුරු තිරයේ පෙන්වයි." },
  "入力": { hiragana: "にゅうりょく", english: "input; data entry", sinhala: "ඇතුළත් කිරීම", type: "Noun / する verb", sentence: "必要な情報を入力してください。", sentenceHiragana: "ひつような じょうほうを にゅうりょくしてください。", sentenceEnglish: "Please enter the required information.", sentenceSinhala: "කරුණාකර අවශ්‍ය තොරතුරු ඇතුළත් කරන්න." },
  "出力": { hiragana: "しゅつりょく", english: "output", sinhala: "ප්‍රතිදානය / පිටතට ලබා දීම", type: "Noun / する verb", sentence: "見積書をPDFで出力しました。", sentenceHiragana: "みつもりしょを PDFで しゅつりょくしました。", sentenceEnglish: "I exported the quotation as a PDF.", sentenceSinhala: "මම මිල ගණන් ලේඛනය PDF ලෙස ප්‍රතිදානය කළෙමි." },
  "添付": { hiragana: "てんぷ", english: "attachment", sinhala: "ඇමුණුම / අමුණා යැවීම", type: "Noun / する verb", sentence: "ファイルをメールに添付しました。", sentenceHiragana: "ファイルを メールに てんぷしました。", sentenceEnglish: "I attached the file to the email.", sentenceSinhala: "මම ගොනුව විද්‍යුත් තැපෑලට ඇමුණුවෙමි." },
  "依頼": { hiragana: "いらい", english: "request", sinhala: "ඉල්ලීම", type: "Noun / する verb", sentence: "開発機への更新を依頼しました。", sentenceHiragana: "かいはつきへの こうしんを いらいしました。", sentenceEnglish: "I requested an update to the development server.", sentenceSinhala: "මම සංවර්ධන සේවාදායකය යාවත්කාලීන කරන ලෙස ඉල්ලා සිටියෙමි." },
  "仕様": { hiragana: "しよう", english: "specification; requirements", sinhala: "පිරිවිතර / අවශ්‍යතා", type: "Noun", sentence: "修正前に仕様を確認します。", sentenceHiragana: "しゅうせいまえに しようを かくにんします。", sentenceEnglish: "I will check the specifications before making the change.", sentenceSinhala: "සංශෝධනය කිරීමට පෙර මම පිරිවිතර පරීක්ෂා කරන්නෙමි." },
  "設計書": { hiragana: "せっけいしょ", english: "design document", sinhala: "සැලසුම් ලේඛනය", type: "Noun", sentence: "設計書の内容を確認しました。", sentenceHiragana: "せっけいしょの ないようを かくにんしました。", sentenceEnglish: "I checked the contents of the design document.", sentenceSinhala: "මම සැලසුම් ලේඛනයේ අන්තර්ගතය පරීක්ෂා කළෙමි." },
  "原因": { hiragana: "げんいん", english: "cause; reason", sinhala: "හේතුව", type: "Noun", sentence: "エラーの原因が分かりました。", sentenceHiragana: "エラーの げんいんが わかりました。", sentenceEnglish: "I found the cause of the error.", sentenceSinhala: "දෝෂයට හේතුව මම සොයා ගත්තෙමි." },
  "例外": { hiragana: "れいがい", english: "exception", sinhala: "ව්‍යතිරේකය", type: "Noun", sentence: "処理中に例外が発生しました。", sentenceHiragana: "しょりちゅうに れいがいが はっせいしました。", sentenceEnglish: "An exception occurred during processing.", sentenceSinhala: "සැකසීම අතරතුර ව්‍යතිරේකයක් ඇති විය." },
  "検索": { hiragana: "けんさく", english: "search", sinhala: "සෙවීම", type: "Noun / する verb", sentence: "ユーザーをメールアドレスで検索します。", sentenceHiragana: "ユーザーを メールアドレスで けんさくします。", sentenceEnglish: "Search for the user by email address.", sentenceSinhala: "විද්‍යුත් තැපැල් ලිපිනය භාවිතයෙන් පරිශීලකයා සොයන්න." },
  "画面": { hiragana: "がめん", english: "screen; display", sinhala: "තිරය", type: "Noun", sentence: "ログ表示画面を開きます。", sentenceHiragana: "ログひょうじがめんを ひらきます。", sentenceEnglish: "I will open the log display screen.", sentenceSinhala: "මම ලොග් දර්ශන තිරය විවෘත කරන්නෙමි." },
  "特約店": { hiragana: "とくやくてん", english: "authorized dealer", sinhala: "බලයලත් නියෝජිත වෙළඳසැල", type: "Noun", sentence: "特約店へメールを送信しました。", sentenceHiragana: "とくやくてんへ メールを そうしんしました。", sentenceEnglish: "I sent an email to the authorized dealer.", sentenceSinhala: "මම බලයලත් නියෝජිත වෙළඳසැලට විද්‍යුත් තැපෑලක් යැව්වෙමි." }
};

const byReading = Object.fromEntries(Object.entries(vocabulary).map(([kanji, value]) => [value.hiragana, kanji]));
const $ = (id) => document.getElementById(id);
const fields = {
  word: $("resultWord"), hiragana: $("resultHiragana"), type: $("resultType"), english: $("resultEnglish"), sinhala: $("resultSinhala"), sentence: $("resultSentence"), sentenceHiragana: $("resultSentenceHiragana"), sentenceEnglish: $("resultSentenceEnglish"), sentenceSinhala: $("resultSentenceSinhala")
};
let currentResult = null;

function findWord(input) {
  const clean = input.trim();
  if (vocabulary[clean]) return { word: clean, ...vocabulary[clean] };
  if (byReading[clean]) return { word: byReading[clean], ...vocabulary[byReading[clean]] };
  return null;
}

function renderResult(result) {
  currentResult = result;
  Object.entries(fields).forEach(([key, element]) => { element.textContent = result[key] || ""; });
  $("emptyState").classList.add("hidden");
  $("resultCard").classList.remove("hidden");
  $("status").textContent = "";
  addHistory(result.word);
}

function analyze(value = $("wordInput").value) {
  const clean = value.trim();
  if (!clean) { $("status").textContent = "Please enter a Japanese word."; return; }
  $("wordInput").value = clean;
  const result = findWord(clean);
  if (!result) {
    $("status").textContent = "This word is not in the built-in vocabulary yet. Add it to vocabulary in script.js.";
    $("resultCard").classList.add("hidden");
    $("emptyState").classList.remove("hidden");
    return;
  }
  renderResult(result);
}

function speak(text) {
  if (!("speechSynthesis" in window)) { $("status").textContent = "Audio is not supported in this browser."; return; }
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = 0.8;
  speechSynthesis.speak(utterance);
}

function getHistory() {
  try { return JSON.parse(localStorage.getItem("japaneseVocabularyHistory") || "[]"); } catch { return []; }
}
function addHistory(word) {
  const next = [word, ...getHistory().filter(x => x !== word)].slice(0, 8);
  localStorage.setItem("japaneseVocabularyHistory", JSON.stringify(next));
  renderHistory();
}
function renderHistory() {
  const list = $("historyList");
  const history = getHistory();
  list.innerHTML = "";
  if (!history.length) { list.innerHTML = '<p class="history-empty">Words you analyze will appear here.</p>'; return; }
  history.forEach(word => {
    const button = document.createElement("button");
    button.className = "history-item";
    button.textContent = `${word} · ${vocabulary[word]?.hiragana || ""}`;
    button.addEventListener("click", () => analyze(word));
    list.appendChild(button);
  });
}

async function copyResult() {
  if (!currentResult) return;
  const r = currentResult;
  const text = `${r.word}\nHiragana: ${r.hiragana}\nEnglish: ${r.english}\nSinhala: ${r.sinhala}\nExample: ${r.sentence}\n${r.sentenceHiragana}\n${r.sentenceEnglish}\n${r.sentenceSinhala}`;
  try {
    await navigator.clipboard.writeText(text);
    $("copyButton").textContent = "Copied";
    setTimeout(() => $("copyButton").textContent = "Copy result", 1400);
  } catch { $("status").textContent = "Copy was blocked by the browser."; }
}

Object.keys(vocabulary).slice(0, 10).forEach(word => {
  const button = document.createElement("button");
  button.className = "suggestion";
  button.textContent = word;
  button.addEventListener("click", () => analyze(word));
  $("suggestions").appendChild(button);
});
$("searchButton").addEventListener("click", () => analyze());
$("wordInput").addEventListener("keydown", event => { if (event.key === "Enter") analyze(); });
$("wordAudio").addEventListener("click", () => currentResult && speak(currentResult.word));
$("sentenceAudio").addEventListener("click", () => currentResult && speak(currentResult.sentence));
$("copyButton").addEventListener("click", copyResult);
$("clearHistory").addEventListener("click", () => { localStorage.removeItem("japaneseVocabularyHistory"); renderHistory(); });
renderHistory();
