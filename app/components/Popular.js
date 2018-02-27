var React = require("react");
import PropTypes from "prop-types";
import api from "../utils/api";


//Component for the List of Languages 
function SelectLanguage(props) {
  var languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

  return (
    <ul className="languages">
      {languages.map(lang => {
        return (
          <li
            style={
              lang === props.selectedLanguage ? { color: "#d0021b" } : null
            }
            onClick={props.onSelect.bind(null, lang)}
            key={lang}
          >
            {lang}
          </li>
        );
      }, this)}
    </ul>
  );
}


//Component of the Grid of Popular Repos 
function RepoGrid(props) {
  return (
    <ul className="popular-list">
      {props.repos.map(function(repo, index) {
        return (
          <li key={repo.name} className="popular-item">
            <div className="popular-rank">#{index + 1}</div>
            <ul className="space-list-items">
              <li>
                <img
                  className="avatar"
                  src={repo.owner.avatar_url}
                  alt={"Avatar for " + repo.owner.login}
                />
              </li>
              <li>
                <a href={repo.html_url}>{repo.name}</a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

//Repo Gid Proptypes = Array
RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
};

// Proptypes for the Languages = sting | For onselect/onclick = fuction(func) 
SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "All",
      repos: null
    };
    this.updateLanguage = this.updateLanguage.bind(this);
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }
  updateLanguage(lang) {
    this.setState(() => {
      return {
        selectedLanguage: lang
      };
    });

    api.fetchPopularRepos(lang).then(
      function(repos) {
        this.setState(function() {
          return {
            repos: repos
          };
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
        {!this.state.repos ? (
          <p>LOADING</p>
        ) : (
          <RepoGrid repos={this.state.repos} />
        )}
      </div>
    );
  }
}

module.exports = Popular;
